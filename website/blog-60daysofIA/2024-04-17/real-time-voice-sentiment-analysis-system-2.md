---
date: 2024-04-17T09:05
slug: real-time-voice-sentiment-analysis-system-2 
title: "7.5 Real-time Voice Sentiment Analysis System 2"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In today's fast-paced digital world, understanding customer sentiment in real-time during voice calls can provide businesses with a competitive edge. This guide will show developers how to build a robust real-time voice sentiment analysis application using several key Azure services. In this second part, we will develop the backend to handle interactions with Azure Communication Services, Azure AI Language and Azure OpenAI, connect it to the frontend, and deploy to Azure Container Apps ." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/real-time-voice-sentiment-analysis-system-2"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/real-time-voice-sentiment-analysis-system-2" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="Azure and platform engineering pave the way for the efficient development, deployment, and maintenance of Intelligent Apps, triumphing over traditional approaches." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/real-time-voice-sentiment-analysis-system-2" /> 
</head> 

<!-- End METADATA -->

## Real-time Voice Sentiment Analysis System Using Azure Communication Services, Azure AI and Azure OpenAI (Part 2)

In the [first part](https://azure.github.io/Cloud-Native/60daysofIA/real-time-voice-sentiment-analysis-system-1) of this topic, we setup all the Azure resources like the [Azure Communication Services](https://learn.microsoft.com/azure/communication-services/overview?ocid=buildia24_60days_blogs) for VoIP and PSTN, [Azure AI Language](https://learn.microsoft.com/azure/ai-services/language-service/overview?ocid=buildia24_60days_blogs), [Azure OpenAI](https://learn.microsoft.com/azure/ai-services/openai/overview?ocid=buildia24_60days_blogs), and developed the frontend for a simple yet functional UI to make voice calls and display closed captions generated from the conversation. In this second part, we will develop the backend to handle interactions with Azure Communication Services, Azure AI Language and Azure OpenAI, connect it to the frontend, and deploy to [Azure Container Apps](https://learn.microsoft.com/azure/container-apps/overview?ocid=buildia24_60days_blogs). Let’s get started!

### Prerequisite

To follow this tutorial, ensure you have completed the [first part](https://azure.github.io/Cloud-Native/60daysofIA/real-time-voice-sentiment-analysis-system-1) of this topic.

### Setting Up the Backend with ASP.NET Core

The backend of our real-time voice sentiment analysis application, built with ASP.NET Core, plays a crucial role. It will handle interactions with Azure Communication Services for voice calling, manage sentiment analysis with Azure AI Language and Azure OpenAI, and serve the necessary tokens and endpoints to our frontend. Let's set this up step by step.

#### Step 1: Create a New ASP.NET Core Project

1. **Open Your Command Line**: Navigate to the directory where you want to create your project.

1. **Create the Project**: Execute the following command to create a new ASP.NET Core Web API project. This command will generate a basic template for a RESTful API application.

    `bash`
    ```
    dotnet new webapi --no-https 
    ```
**Note**: We are turning off HTTPS for simplicity in this guide. For production environments, HTTPS should be enabled and properly configured.

#### Step 2: Add Azure SDK Packages

Our backend needs to interact with Azure Communication Services, Azure AI Language, and Azure OpenAI. We'll add the necessary NuGet packages for these services. 

1. **Azure Communication Services SDK**: This package allows us to manage voice calling and access tokens.

    `bash`
    ```
    dotnet add package Azure.Communication.CallingServer 
    ```

1. **Azure AI Text Analytics SDK**: We'll use this for sentiment analysis through Azure AI Language.

    `bash`
    ```
    dotnet add package Azure.AI.TextAnalytics 
    ```

1. **Azure OpenAI SDK**: This package is used to interact with Azure OpenAI for more complex sentiment analysis.

    `bash`
    ```
    dotnet add package Azure.AI.OpenAI --prerelease 
    ```

#### Step 3: Set Up Configuration

1. **appsettings.json**: Open or create the `appsettings.json` file in your project root. Add placeholders for the keys and endpoints for the Azure services. Here’s an example configuration:

    `json`
    ```
    { 
        "Logging": { 
            "LogLevel": { 
            "Default": "Information", 
            "Microsoft.AspNetCore": "Warning" 
            } 
        }, 
        "AllowedHosts": "*", 
        "AzureSettings": { 
            "AZURE_LANGUAGE_SERVICE_KEY": "YOUR_AZURE_LANGUAGE_KEY", 
            "AZURE_LANGUAGE_SERVICE_ENDPOINT": "YOUR_AZURE_OPENAI_ENDPOINT", 
            "OPENAI_ENDPOINT": "YOUR_AZURE_OPENAI_ENDPOINT", 
            "OPENAI_KEY": "YOUR_AZURE_OPENAI_KEY", 
            "OPENAI_DEPLOYMENT_NAME": "YOUR_AZURE_OPENAI_ENDPOINT_DEPLOYMENT", 
            "COMMUNICATION_CONNECTION_STRING": "YOUR_AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING" 
        } 
    } 
    ```
    * Replace the placeholders with your actual Azure resource keys and endpoints.

1. **Configure Services in Program.cs**: Read the endpoint from appsettings.json and configure the services in the `Program.cs` file.

    `csharp`
    ```
    // Set keys and configuration 
    var azureSettings = builder.Configuration.GetSection("AzureSettings"); 

    string GetSetting(string key) => azureSettings[key] ?? throw new Exception($"{key} is not set"); 

    var languageKey = GetSetting("AZURE_LANGUAGE_SERVICE_KEY"); 
    var languageEndpoint = GetSetting("AZURE_LANGUAGE_SERVICE_ENDPOINT"); 
    AzureKeyCredential credentials = new AzureKeyCredential(languageKey); 
    Uri endpoint = new Uri(languageEndpoint); 
    var textAnalyticsClient = new TextAnalyticsClient(endpoint, credentials); 

    var OPENAI_ENDPOINT = GetSetting("OPENAI_ENDPOINT"); 
    var OPENAI_KEY = GetSetting("OPENAI_KEY"); 
    var OPENAI_DEPLOYMENT_NAME = GetSetting("OPENAI_DEPLOYMENT_NAME"); 
    OpenAIClient openAIClient = new OpenAIClient( 
        new Uri(OPENAI_ENDPOINT), 
        new AzureKeyCredential(OPENAI_KEY)); 

    var communicationConnectionString = GetSetting("COMMUNICATION_CONNECTION_STRING"); 
    var communicationClient = new CommunicationIdentityClient(communicationConnectionString); 
    ```

1. **Implement the Token Endpoint**:

In your ASP.NET Core project Program.cs, create a new endpoint to generate and return an access token. We'll call this endpoint from our client later.

`csharp`
```
app.MapGet("api/token", () => 
{ 
    var identityAndTokenResponse = communicationClient.CreateUserAndToken(scopes: [CommunicationTokenScope.VoIP]); 


    var result = new TokenResponse() 
    { 
        Token = identityAndTokenResponse.Value.AccessToken.Token, 
        PhoneNumber = "+12533192954", 
    }; 

    return Results.Json(result); 
}) 
.WithName("Token") 
.WithOpenApi(); 
```

We'll also need a TokenResponse object to return the token and phone number:

`c sharp`
```
public class TokenResponse 
{ 
    public string Token { get; set; } 
    public string PhoneNumber { get; set; } 
} 
```

#### Step 4: Implement Sentiment Analysis Endpoints

With the services configured, you can now implement the API endpoints needed for your application. Here are the essentials:

1. **Token Provisioning**: An endpoint to provide access tokens for Azure Communication Services.

1. **Sentiment Analysis**: Endpoints to analyze sentiment using either Azure AI Language or Azure OpenAI.

`csharp`
```
app.MapPost("api/sentiment", (SentimentRequest request) => 
{ 
    var result = SentimentAnalysisWithAzureLanguage(request.Content); 


    return Results.Json(result); 
}) 
.WithName("Sentiment") 
.WithOpenApi(); 
```

This endpoint takes a SentimentRequest object and returns a SentimentResponse object and calls one of our sentiment analysis methods, which we'll implement shortly

`csharp`
```
public class SentimentRequest 
{ 
    public string Analyzer { get; set; } = string.Empty; 
    public string ParticipantToAnalyze { get; set; } = string.Empty; 
    public string Content { get; set; } = string.Empty; 
} 

public class SentimentResult 
{ 
    public string Sentiment { get; set; } = string.Empty; 
    public double PositiveContentScore { get; set; } 
} 
```

We'll create a method that uses Azure AI Language and another that uses Azure OpenAI. Here's an example of how to implement sentiment analysis using Azure AI Language:

`csharp`
```
SentimentResult SentimentAnalysisWithAzureLanguage(string document) 
{ 
    var review = textAnalyticsClient.AnalyzeSentiment(document); 
    return new SentimentResult() 
    { 
        Sentiment = review.Value.Sentiment.ToString(), 
        PositiveContentScore = review.Value.ConfidenceScores.Positive 
    }; 
} 
```

And we'll create method endpoint that uses Azure OpenAI:

`csharp`
```
SentimentResult SentimentAnalysisWithGPT(string document) 
{ 
    var chatCompletionsOptions = new ChatCompletionsOptions() 
    { 
        DeploymentName = "shawn-deployment", 
        Messages = 
            { 
                new ChatRequestSystemMessage(SentimentAnalysisPrompt), 
                new ChatRequestUserMessage(document), 
            }, 
        Temperature = (float)1, 
        MaxTokens = 800             
    }; 

    Response<ChatCompletions> response = openAIClient.GetChatCompletions(chatCompletionsOptions); 

    return new SentimentResult() { 
        Sentiment = response.Value.Choices[0].Message.Content 
    }; 
} 
```

#### Step 5: Test Your Backend

Before moving forward, make sure to test your backend. Use tools like Postman or Swagger UI to ensure your endpoints are responsive and returning the expected results. 

Your final backend should look like this: 

`csharp`
```
using Azure; 
using Azure.AI.TextAnalytics; 
using Azure.AI.OpenAI; 
using Azure.Communication.Identity; 

var builder = WebApplication.CreateBuilder(args); 

// Add services to the container. 
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle 
builder.Services.AddEndpointsApiExplorer(); 
builder.Services.AddSwaggerGen(); 

// Set keys and configuration 
var azureSettings = builder.Configuration.GetSection("AzureSettings"); 

string GetSetting(string key) => azureSettings[key] ?? throw new Exception($"{key} is not set"); 

var languageKey = GetSetting("AZURE_LANGUAGE_SERVICE_KEY"); 
var languageEndpoint = GetSetting("AZURE_LANGUAGE_SERVICE_ENDPOINT"); 
AzureKeyCredential credentials = new AzureKeyCredential(languageKey); 
Uri endpoint = new Uri(languageEndpoint); 
var textAnalyticsClient = new TextAnalyticsClient(endpoint, credentials); 

var OPENAI_ENDPOINT = GetSetting("OPENAI_ENDPOINT"); 
var OPENAI_KEY = GetSetting("OPENAI_KEY"); 
var OPENAI_DEPLOYMENT_NAME = GetSetting("OPENAI_DEPLOYMENT_NAME"); 
OpenAIClient openAIClient = new OpenAIClient( 
    new Uri(OPENAI_ENDPOINT), 
    new AzureKeyCredential(OPENAI_KEY)); 

var communicationConnectionString = GetSetting("COMMUNICATION_CONNECTION_STRING"); 
var communicationClient = new CommunicationIdentityClient(communicationConnectionString); 

const string SentimentAnalysisPrompt = "Please analyze the sentiment of the following text. The sentiment can be positive, negative, or neutral. Response on with one of those three values"; 

var app = builder.Build(); 

// Configure the HTTP request pipeline. 
if (app.Environment.IsDevelopment()) 
{ 
    app.UseSwagger(); 
    app.UseSwaggerUI(); 
} 

app.MapGet("api/token", () => 
{ 
    var identityAndTokenResponse = communicationClient.CreateUserAndToken(scopes: [CommunicationTokenScope.VoIP]); 
  

    var result = new TokenResponse() 
    { 
        Token = identityAndTokenResponse.Value.AccessToken.Token, 
        PhoneNumber = "+12533192954", 
    }; 

    return Results.Json(result); 
}) 
.WithName("Token") 
.WithOpenApi(); 

app.MapPost("api/sentiment", (SentimentRequest request) => 
{ 
    var result = SentimentAnalysisWithAzureLanguage(request.Content); 
  

    return Results.Json(result); 
}) 
.WithName("Sentiment") 
.WithOpenApi(); 

 
app.Run(); 


SentimentResult SentimentAnalysisWithAzureLanguage(string document) 
{ 
    var review = textAnalyticsClient.AnalyzeSentiment(document); 
    return new SentimentResult() 
    { 
        Sentiment = review.Value.Sentiment.ToString(), 
        PositiveContentScore = review.Value.ConfidenceScores.Positive 
    }; 
} 

// // Function to get a response from OpenAI's ChatGPT 
SentimentResult SentimentAnalysisWithGPT(string document) 
{ 
    var chatCompletionsOptions = new ChatCompletionsOptions() 
    { 
        DeploymentName = "shawn-deployment", 
        Messages = 
            { 
                new ChatRequestSystemMessage(SentimentAnalysisPrompt), 
                new ChatRequestUserMessage(document), 
            }, 
        Temperature = (float)1, 
        MaxTokens = 800             
    }; 

    Response<ChatCompletions> response = openAIClient.GetChatCompletions(chatCompletionsOptions); 

    return new SentimentResult() { 
        Sentiment = response.Value.Choices[0].Message.Content 
    }; 
} 
public class TokenResponse 
{ 
    public string Token { get; set; } = string.Empty; 
    public string PhoneNumber { get; set; } = string.Empty; 
} 

public class SentimentRequest 
{ 
    public string Analyzer { get; set; } = string.Empty; 
    public string ParticipantToAnalyze { get; set; } = string.Empty; 
    public string Content { get; set; } = string.Empty; 
} 

public class SentimentResult 
{ 
    public string Sentiment { get; set; } = string.Empty; 
    public double PositiveContentScore { get; set; } 
} 
```

:::info
Earn Microsoft-verified credentials for cloud-native app development skills by passing the [Azure Container Apps](https://learn.microsoft.com/credentials/applied-skills/deploy-cloud-native-apps-using-azure-container-apps/?ocid=buildia24_60days_blogs) assessment to elevate your professional profile. 
:::

### Connecting the Frontend with the ASP.NET Core Backend

After setting up the backend and the frontend of our real-time voice sentiment analysis application separately, it’s time to connect them. This connection ensures that our Node.js frontend can communicate with the ASP.NET Core backend to do things like obtaining access tokens for Azure Communication Services and conducting sentiment analysis through Azure AI Language and Azure OpenAI.

#### Step 1: Get the Access Token

For our application to establish a call, the frontend needs to obtain an access token from Azure Communication Services. In the `app.js` file within your Node.js project, modify the `initCallAgent` function to fetch the token from the backend before initializing the call agent. Use the `fetch` API for this purpose:

`javascript`
```
async function initCallAgent() { 
    try { 
        const response = await fetch('/api/communications/token'); 
        const { token, userId } = await response.json(); 

        const tokenCredential = new AzureCommunicationTokenCredential(token); 
        const callClient = new CallClient(); 
        callAgent = await callClient.createCallAgent(tokenCredential, { displayName: 'Caller' }); 

        attachCallListeners(); 
    } catch (error) { 
        console.error('Failed to obtain token:', error); 
    } 
} 
```

#### Step 2: Implement Sentiment Analysis on Captions

Our application should analyze the sentiment of the transcribed call captions. We’ll capture these captions on the frontend, then send them to our backend for sentiment analysis.

1. **Make Sentiment Analysis Request:**

In the `captionsReceivedHandler`, make a request to your backend sentiment analysis endpoint whenever captions are received. Update your captions event handler, under `if (captionData.resultType === 'Final')` to include this:

`javascript`
```
if (captionData.resultType === 'Final') { 
    captionContainer.setAttribute('isNotFinal', 'false'); 
    transcript.push(captionText); 

    // Call the sentiment service 
    fetch('/api/sentiment', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({ content: transcript.join('\n') }) 
    }) 
    .then(response => response.json()) 
    .then(data => { 
        // Handle the sentiment response 
        const sentimentText = `Sentiment:${data.sentiment} (${data.positiveContentScore})`; 
        document.getElementById('sentimentScore').textContent = captionText; 

        //update sentiment UI 
        updateSentimentMeter(data.positiveContentScore); 

    }); 
} 
```

#### Step 3: Display Analysis Results

Finally, utilize the sentiment analysis data received from the backend to inform the user about the call’s sentiment in real-time.

1. **Update the UI Dynamically**:

Enhance your frontend to dynamically display sentiment analysis results as they are received. We'll add an indicator for positive, neutral, or negative sentiment.

`javascript`
```
function updateSentimentMeter(score) { 
    // Ensure score is between 0 and 1 
    score = Math.max(0, Math.min(score, 1)); 

    // Convert score to angle: -90° for 0, 90° for 1 
    var angle = score * 180 - 90; 

    // Rotate the arrow to the corresponding angle 
    document.getElementById('meterArrow').style.transform = 'rotate(' + angle + 'deg)'; 
} 
```

Create new elements in the HTML to display the sentiment score and meter:

`html`
```
<div id="captionsArea" ></div> 
<h4>Sentiment Score</h4> 
<div id="sentimentMeter" class="meter"> 
    <div id="meterArrow" class="arrow"></div> 
<div id="sentimentScore" ></div> 
```

Your complete code for app.js should look like this:

`javascript`
```
import { CallClient, CallAgent, Features } from "@azure/communication-calling"; 
import { AzureCommunicationTokenCredential } from '@azure/communication-common'; 

let call; 
let callAgent; 

const calleePhoneInput = document.getElementById("callee-phone-input"); 
const callPhoneButton = document.getElementById("call-phone-button"); 
const hangUpPhoneButton = document.getElementById("hang-up-phone-button"); 

let acsPhoneNumber; 
let tokenCredential; 

let captions; 

async function init() { 

    const response = await fetch('/api/token');  
    const { token, phoneNumber } = await response.json(); 

    tokenCredential = new AzureCommunicationTokenCredential(token); 
    acsPhoneNumber = phoneNumber; 

    const callClient = new CallClient(); 
    callAgent = await callClient.createCallAgent(tokenCredential); 
} 

init(); 

callPhoneButton.addEventListener("click", () => { 
    // start a call to phone 
    const endpointToCall = calleePhoneInput.value; 

    const guidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; 
    const phoneNumberPattern = /^\+\d+$/; 
    const userIdPattern = /^8:acs:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}_[0-9a-f-]+$/i; 

    if (guidPattern.test(endpointToCall)) { 
        call = callAgent.join({ groupId: endpointToCall}); 
    } else if (phoneNumberPattern.test(endpointToCall)) { 
        call = callAgent.startCall( 
            [{phoneNumber: endpointToCall}], { alternateCallerId: {phoneNumber: acsPhoneNumber} 
        }); 
    } else if (userIdPattern.test(endpointToCall)) { 
        call = callAgent.startCall({ communicationUserId: endpointToCall }); 
    } else { 
        console.error('Invalid input. Must be a phone number, user ID, or GUID'); 
        return; 
    } 
  

    call.on('stateChanged', async () => { 
        console.log(`Call state: ${call.state}`); 
        if(call.state === 'Connected') { 
            console.log('Call connected'); 
                 

            captions = call.feature(Features.Captions).captions; 
            transcript = []; 
            try { 
                if (!captions.isCaptionsFeatureActive) { 
                    await captions.startCaptions({ spokenLanguage: 'en-us' }); 
                } 
                captions.on('CaptionsReceived', captionsReceivedHandler); 
            } catch (e) { 
                console.error('startCaptions failed', e); 
            } 
        } 
    }); 

    hangUpPhoneButton.disabled = false; 
    callPhoneButton.disabled = true; 
  }); 

  hangUpPhoneButton.addEventListener("click", () => { 
    // end the current call 
    call.hangUp({ 
      forEveryone: true 
    }); 

    // toggle button states 
    hangUpPhoneButton.disabled = true; 
    callPhoneButton.disabled = false; 
  }); 

  const captionsReceivedHandler = (captionData) => { 
    let mri = ''; 

    if (captionData.speaker.identifier.kind === 'communicationUser') { 
        mri = captionData.speaker.identifier.communicationUserId; 
        mri = mri.slice(-8); 
    } else if (captionData.speaker.identifier.kind === 'microsoftTeamsUser') { 
        mri = captionData.speaker.identifier.microsoftTeamsUserId; 
        mri = mri.slice(-8); 
    } else if (captionData.speaker.identifier.kind === 'phoneNumber') { 
        mri = captionData.speaker.identifier.phoneNumber; 
    } 

    let displayName = captionData.speaker.displayName || mri; 

    // Get the captions area container 
    let captionAreasContainer = document.getElementById('captionsArea'); 

    // Generate a class name based on the MRI 
    const newClassName = `prefix${mri.replace(/[:\-+]/g, '')}`; 

    // Generate the caption text 
    const captionText = `${captionData.timestamp.toUTCString()} ${displayName}: ${captionData.captionText ?? captionData.spokenText}`; 

    // Try to find an existing caption container 
    let captionContainer = captionAreasContainer.querySelector(`.${newClassName}[isNotFinal='true']`); 

    // If no existing caption container was found, create a new one 
    if (!captionContainer) { 
        captionContainer = document.createElement('div'); 
        captionContainer.setAttribute('isNotFinal', 'true'); 
        captionContainer.classList.add(newClassName, 'caption-item'); 
        captionAreasContainer.appendChild(captionContainer); 
    } 

    // Set the caption text 
    captionContainer.textContent = captionText; 

    // If the caption is final, update the 'isNotFinal' attribute 
    if (captionData.resultType === 'Final') { 
        captionContainer.setAttribute('isNotFinal', 'false'); 
        transcript.push(captionText); 


         // Call the sentiment service 
         fetch('/api/sentiment', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify({ content: transcript.join('\n') }) 
        }) 
        .then(response => response.json()) 
        .then(data => { 
            // Handle the sentiment response 
            const sentimentText = `Sentiment:${data.sentiment} (${data.positiveContentScore})`; 
            document.getElementById('sentimentScore').textContent = captionText; 
            updateSentimentMeter(data.positiveContentScore); 
        }); 
    } 

    function updateSentimentMeter(score) { 
        // Ensure score is between 0 and 1 
        score = Math.max(0, Math.min(score, 1)); 

        // Convert score to angle: -90° for 0, 90° for 1 
        var angle = score * 180 - 90; 

        // Rotate the arrow to the corresponding angle 
        document.getElementById('meterArrow').style.transform = 'rotate(' + angle + 'deg)'; 
    } 
}; 
```

... and the HTML should look like this

`HTML`
```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Azure Communication Service - Realtime Sentiment Analysis</title> 
    <link rel="stylesheet" href="styles.css"> 
  </head> 
  <body> 
    <h4>Azure Communication Services</h4> 
    <input  
      id="callee-phone-input" 
      type="text" 
      placeholder="Who would you like to call?" 
    /> 
    <div> 
      <button id="call-phone-button" type="button"> 
        Start Call 
      </button> 
      &nbsp; 
      <button id="hang-up-phone-button" type="button" disabled="true"> 
        Hang Up 
      </button> 
      <div id="captionsArea" ></div> 
      <h4>Sentiment Score</h4> 
      <div id="sentimentMeter" class="meter"> 
        <div id="meterArrow" class="arrow"></div> 
      <div id="sentimentScore" ></div> 
    </div> 

    </div> 
    <script src="./app.js" type="module"></script> 
  </body> 
</html> 
```

#### Testing the Complete System

With the frontend and backend now connected, thoroughly test your application:

* Ensure the voice call setup and teardown works flawlessly.
* Verify that captions are accurately captured and displayed. 
* Confirm that sentiment analysis requests are successfully handled and that the results make sense for the given captions.

:::info
Explore a variety of Azure Container Apps [code samples](https://learn.microsoft.com/samples/browse/?terms=azure%20container%20apps&ocid=buildia24_60days_blogs) for a quick start to your intelligent app development with cloud-native technologies. 
:::

### Deployment

With the real-time voice sentiment analysis system fully developed, including both the frontend and backend components, the next critical step is deployment. We'll deploy the ASP.NET Core backend using Azure Container Apps and the Node.js frontend through Azure Static Web Apps. 

#### Step 1: Prepare the Backend for Deployment

##### Create a Dockerfile

1. **Navigate to Your Backend Project Directory**: Open the terminal or command prompt and ensure you're in the root directory of your ASP.NET Core project.

1. **Create a Dockerfile**: In the root of your project, create a file named `Dockerfile` with no file extension. This file will contain instructions for building a Docker image for your application.

1. **Define the Dockerfile Contents**: Open the `Dockerfile` in your editor and add the following content:

`Dockerfile`
```
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base 
WORKDIR /app 
EXPOSE 80 

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build 
WORKDIR /src 
COPY ["VoiceSentimentBackend.csproj", "."] 
RUN dotnet restore "./VoiceSentimentBackend.csproj" 
COPY . . 
WORKDIR "/src/." 
RUN dotnet build "VoiceSentimentBackend.csproj" -c Release -o /app/build 

FROM build AS publish 
RUN dotnet publish "VoiceSentimentBackend.csproj" -c Release -o /app/publish 

FROM base AS final 
WORKDIR /app 
COPY --from=publish /app/publish . 
ENTRYPOINT ["dotnet", "VoiceSentimentBackend.dll"] 
```

**Note**: Adjust `"VoiceSentimentBackend.csproj"` to match your project's name.

##### Create and Test the Docker Image Locally

1. **Build the Docker Image**: Run the following command in your terminal:

    `bash`
    ```
    docker build -t voicesentimentbackend .
    ```

1. **Run Your Docker Container**: To test the Docker container locally, execute:

    `bash`
    ```
    docker run -d -p 8080:80 --name myapp voicesentimentbackend
    ```

1. **Verify**: Open your browser and navigate to `http://localhost:8080/api/token` to ensure your application is running correctly in the container.

#### Step 2: Deploy the Backend to Azure Container Apps

Azure Container Apps offers a fully managed serverless container service. It's an excellent choice for deploying containers without managing complex infrastructure. 

1. **Create a Container App Environment**: Use VS Code to create an Azure Container App and deploy your backend. Follow the [official documentation](https://docs.microsoft.com/azure/container-apps/quickstart-dotnet?ocid=buildia24_60days_blogs) for detailed instructions. Type Crtl+Shift+P to open the command palette and type "Azure Container Apps: Create New Container App" and follow the prompts.

1. **Verify Deployment**: Use the FQDN obtained from the previous command to verify your application is accessible via the internet.

#### Step 3: Deploy the Frontend to Azure Static Web Apps

Azure Static Web Apps is a service tailored for static web applications, providing global distribution, serverless APIs, and seamless integration with GitHub for continuous deployment.

##### Setting Up Continuous Deployment with GitHub

1. **Push Your Frontend Code to GitHub**: Ensure your Node.js frontend code is in a GitHub repository.

1. **Create a Static Web App Resource**: In the Azure Portal, create a new Static Web App resource and connect it to your GitHub repository. Specify your build details during the setup.

1. **Verify Deployment**: Once the GitHub Actions workflow is completed, your Static Web App will be accessible via the provided URL. Check it to ensure your frontend is live and functional.

#### Conclusion

Over the course of this guide, you've:

* Set up and configured critical Azure resources, including Azure Communication Services for managing voice calls, Azure AI Language for basic sentiment analysis, and Azure OpenAI for more nuanced sentiment insights. 
* Developed a Node.js frontend to interface with users, initiating and managing voice calls, and dynamically displaying sentiment analysis results. 
* Implemented an ASP.NET Core backend to handle business logic, interact with Azure services, and provide APIs for the frontend. 
* Connected your frontend and backend, ensuring seamless communication and data flow within your application. 
* Deployed your application to Azure, leveraging Azure Container Apps for the backend and Azure Static Web Apps for the frontend, making your project accessible from anywhere.

#### Future Enhancements

While your current application is fully functional, there's always room for improvement and expansion. Consider the following possibilities for future development:

* **Language Support**: Expand the application to support additional languages, enhancing its accessibility and utility across different geographical locations. 
* **Advanced AI Insights**: Explore deeper insights beyond sentiment, such as emotional tone, intent recognition, or specific topic detection, to provide more detailed analysis of voice calls. 