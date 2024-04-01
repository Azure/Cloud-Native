---
date: 2024-04-01T09:01
slug: building-a-multichannel-notification-system-2
title: "6.5 Building a Multichannel Notification System (2)"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "This blog post outlines a step-by-step guide on building such a multichannel notification system with Azure Functions and Azure Communication Services. " 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/building-a-multichannel-notification-system-2"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="This blog post outlines a step-by-step guide on building such a multichannel notification system with Azure Functions and Azure Communication Services."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/building-a-multichannel-notification-system-2" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="This blog post outlines a step-by-step guide on building such a multichannel notification system with Azure Functions and Azure Communication Services." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/building-a-multichannel-notification-system-2" /> 
</head> 

<!-- End METADATA -->

## Building a Multichannel Notification System with Azure Functions and Azure Communication Services (2)

In the first part of this topic, we setup all the Azure resources like the Azure Communication Services for Email, SMS, WhatsApp for Business and developed the Azure Functions code for the email trigger. In this second part, we will complete coding the remaining Azure Functions triggers and then go ahead to deploy the multichannel notification system to Azure Functions, testing the Email, SMS, and WhatsApp triggers with OpenAI GPTs. Let’s get started!

### Prerequisite

To follow this tutorial, ensure you have completed the first part of this topic.

### Coding the SMSTrigger

Enhancing the `SMSTrigger` Azure Function from the default template involves a series of steps. These steps will transform the basic Function into one that can send SMS messages using Azure Communication Services. Below is a guide to get you from the default HTTP triggered function to the finished `SMSTrigger`.

:::info
Join the Azure Functions product group for an **[Ask The Expert](https://aka.ms/intelligent-apps/ate-functions?ocid=buildia24_60days_blogs)** session on how to build intelligent apps with serverless, top use cases to explore and what is coming next for the Era of AI.
:::

#### Step 1: Set Up the Function Template

Follow the instructions for setting up the function template from the Email section and name the trigger as ‘SMSTrigger’ or any other string you prefer.

#### Step 2: Add Azure Communication Services SMS Reference

Add a reference to using `Azure.Communication.Sms` then create a property in the SMS Trigger class to hold an instance of `SmsClient` and a property to hold the email sender address.

`csharp`
```
private readonly SmsClient _smsClient;
private string? sender = Environment.GetEnvironmentVariable("SENDER_PHONE_NUMBER");
```

#### Step 3: Read Configuration and Initialize SmsClient

In the constructor of the `SMSTrigger` class, read the Azure Communication Services connection string from the environment variables using the `Environment.GetEnvironmentVariable()` method and initialize the `SmsClient` instance.

Be sure to check if the connection string is null, and if so, throw an exception to indicate that the environment variable is missing:

`csharp`
```
string? connectionString = Environment.GetEnvironmentVariable("COMMUNICATION_SERVICES_CONNECTION_STRING");
if (connectionString is null)
{
    throw new InvalidOperationException("COMMUNICATION_SERVICES_CONNECTION_STRING environment variable is not set.");
}
_smsClient = new SmsClient(connectionString);
```

#### Step 4: Define the Request Model

Create a request model class within the `SMSTrigger` class called `SmsRequest`. This model should contain properties for the message text and the phone number to which the message will be sent.

`csharp`
```
public class SmsRequest
{
    public string Message { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
}
```

#### Step 5: Parse the Request Body

Change the `Run` function to be `async` as we will perform asynchronous operations. Use a `StreamReader` to read the request body as a string and deserialize it into an `SmsRequest` object using `JsonSerializer`.

`csharp`
```
public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequest req)
```

If the request body fails to deserialize into SmsRequest, return a BadRequestResult:

`csharp`
```
string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
SmsRequest? data = JsonSerializer.Deserialize<SmsRequest>(requestBody, new JsonSerializerOptions() {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
if (data is null)
{
    return new BadRequestResult();
}
```

#### Step 6: Define the Sender and Send an SMS

Retrieve the sender's phone number from the environment variables with `Environment.GetEnvironmentVariable()`. Then, attempt to send the SMS with a try-catch block, handling any `RequestFailedException` that may occur and logging the relevant information:

`csharp`
```
try 

{
    _logger.LogInformation("Sending SMS...");
    SmsSendResult smsSendResult = await _smsClient.SendAsync(
        sender,
        data.PhoneNumber,
        data.Message
    );
    _logger.LogInformation($"SMS Sent. Successful = {smsSendResult.Successful}");
    _logger.LogInformation($"SMS operation id = {smsSendResult.MessageId}");
}
catch (RequestFailedException ex)
{
    _logger.LogInformation($"SMS send operation failed with error code: {ex.ErrorCode}, message: {ex.Message}");
    // Return an appropriate error response if needed
}
```

#### Step 7: Return a Success Response

If sending the SMS is successful, return an `OkObjectResult` to the caller indicating that the SMS has been sent.

`csharp`
```
return new OkObjectResult("SMS sent successfully!");
```

#### Final Code

The final `SMSTrigger` Azure Function, with the steps implemented, should look as follows:

`csharp`
```
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging; 

using Azure;
using Azure.Communication.Messages;
using System.Text.Json;
using System.IO;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic; 

namespace ACSGPTFunctions
{
    public class WhatsAppTrigger
    {
        private readonly ILogger<WhatsAppTrigger> _logger;
        private readonly NotificationMessagesClient _messagesClient;
        private string? sender = Environment.GetEnvironmentVariable("WHATSAPP_NUMBER");

        public WhatsAppTrigger(ILogger<WhatsAppTrigger> logger)
        {
            _logger = logger;
            string? connectionString = Environment.GetEnvironmentVariable("COMMUNICATION_SERVICES_CONNECTION_STRING");
            if (connectionString is null)
            {
                throw new InvalidOperationException("COMMUNICATION_SERVICES_CONNECTION_STRING environment variable is not set.");
            }
            _messagesClient = new NotificationMessagesClient(connectionString);
        }

        public class WhatsAppRequest
        {
            public string PhoneNumber { get; set; } = string.Empty;
            public string TemplateName { get; set; } = "appointment_reminder";
            public string TemplateLanguage { get; set; } = "en";
            public List<string> TemplateParameters { get; set; } = new List<string>();
        }

        [Function("WhatsAppTrigger")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("Processing request.");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            WhatsAppRequest? data = JsonSerializer.Deserialize<WhatsAppRequest>(requestBody, new JsonSerializerOptions() {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            }); 

            if (data is null)
            {
                return new BadRequestResult();
            } 

            var recipientList = new List<string> { data.PhoneNumber };
            var values = data.TemplateParameters
                .Select((parameter, index) => new MessageTemplateText($"value{index + 1}", parameter))
                .ToList();
            var bindings = new MessageTemplateWhatsAppBindings(
                body: values.Select(value => value.Name).ToList()
            );
            var template = new MessageTemplate(data.TemplateName, data.TemplateLanguage, values, bindings);
            var sendTemplateMessageOptions = new SendMessageOptions(sender, recipientList, template);

            try
            {
                Response<SendMessageResult> templateResponse = await _messagesClient.SendMessageAsync(sendTemplateMessageOptions);
                _logger.LogInformation("WhatsApp message sent successfully!");
            }
            catch (RequestFailedException ex)
            {
                _logger.LogError($"WhatsApp send operation failed with error code: {ex.ErrorCode}, message: {ex.Message}");
                return new ObjectResult(new { error = ex.Message }) { StatusCode = 500 };
            }
            return new OkObjectResult("WhatsApp sent successfully!");
        }
    }
}
```

The `WhatsAppTrigger` Azure Function is now ready to send WhatsApp template messages. Be sure to test it extensively and remember to handle any issues related to input validation and communicate with the Azure Communication Services API correctly.

### Deployment and Testing

After developing the multichannel notification system using Azure Functions, the next step is to deploy and test the functions. This section will guide you through deploying your Azure Function to the cloud and testing the Email, SMS, and WhatsApp triggers.

#### Deploying the Azure Function

Deployment of your Azure Function can be done right from Visual Studio Code with the Azure Functions extension.

  1. **Publish the Function App**: In Visual Studio Code, sign in to Azure if you haven't already. In the Azure Functions extension tab, find the 'Deploy to Function App...' button and select it. 

![image of the Deploy to Function App button](../../static/img/60-days-of-ia/blogs/2024-04-01/6-5-1.png)

  1. **Choose Your Function App**: You can either create a new Function App or deploy it to an existing one. If it's the first time you are deploying, choose 'Create New Function App in Azure...'.

  2. **Set the Configuration**: Provide a unique name for your Function App, select a runtime stack (.NET Core in this case), choose the appropriate region, and confirm your selections.

  3. **Wait for Deployment**: The deployment process will take a few minutes. Monitor the output window for completion status and any potential errors.

#### Set Up Application Settings

fter deployment, you need to configure the application settings (environment variables) in Azure.

  1. **Open the Function App**: Navigate to the [Azure Portal](https://portal.azure.com/), and find your Function App under 'All Resources' or by searching the name you provided.
  2. **Access Application Settings**: In the Function App's menu, go to 'Configuration' under the 'Settings' section.
  3. **Add the Settings**: Click on 'New application setting' and add the key-value pairs for the environment variables specified in your `local.settings.json`: `COMMUNICATION_SERVICES_CONNECTION_STRING`, `SENDER_EMAIL_ADDRESS`, `SENDER_PHONE_NUMBER`, `WHATSAPP_NUMBER`, etc.,

`json`
```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated",
    "COMMUNICATION_SERVICES_CONNECTION_STRING": "<<connection string>>",
    "SENDER_PHONE_NUMBER": "<<phone number>>",
    "SENDER_EMAIL_ADDRESS": "<<email address>>",
    "WHATSAPP_NUMBER":"<<WhatsApp id>>"
  }
}
```

  4. **Save and Restart**: After adding the required settings, make sure to save the configurations and restart the Function App to ensure the new settings take effect.

Alternatively, when the Function has finished deploying, you can click on 'Upload settings' to upload your settings from local.settings.json. Don't forget to restart the Function App after uploading the settings.

![image of stream logs settings selection](../../static/img/60-days-of-ia/blogs/2024-04-01/6-5-2.png)

#### Testing the Function

With the deployment complete and the environment configured, it's time to verify that your function works as intended through each communication channel.

##### Testing Email Notifications



![image of email composer in Chat GPT configuration](../../static/img/60-days-of-ia/blogs/2024-04-01/6-5-3.png)

![image of email composer in Chat GPT results](../../static/img/60-days-of-ia/blogs/2024-04-01/6-5-4.png)
