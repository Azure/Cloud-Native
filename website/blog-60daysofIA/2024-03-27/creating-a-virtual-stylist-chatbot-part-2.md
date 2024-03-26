---
date: 2024-03-27T09:00
slug: creating-a-virtual-stylist-chatbot-part-2
title: "6.2 Creating a Virtual Stylist Chatbot — Part 2: Adding a Chatbot Interface"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this four-part series, you’ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you’ll design the chatbot’s interface." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/creating-a-virtual-stylist-chatbot-part-2"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this four-part series, you’ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you’ll design the chatbot’s interface."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-2" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this four-part series, you’ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you’ll design the chatbot’s interface." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-2" /> 
</head> 

<!-- End METADATA -->

![Graphical representation of a chatbot. The human user's chat bubble contains a t-shirt with a question mark, while the bot's chat bubble contains three dots to indicate it is responding.](../../static/img/60-days-of-ia/blogs/2024-03-27/6-2-1.jpeg)

## Creating a Virtual Stylist Chatbot — Part 2: Adding a Chatbot Interface

Welcome to part 2 of this tutorial series on creating a virtual stylist chatbot using Azure OpenAI Service.  

In [part 1](https://azure.github.io/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-1), you built the chatbot app’s back end using Azure Functions, Azure AI Services, and GPT-4 Vision with Azure OpenAI Service. That tutorial covered using these services to analyze an image of a fashion item or outfit and generate natural language responses and recommendations based on it.

In this second installment, you’ll create a chatbot interface for your virtual stylist app using Vite, Vue, TypeScript, and vue-advanced-chat. You’ll learn how to use these tools to build a web application that allows you to interact with your stylist bot conversationally.

### Prerequisites

Before you start, ensure you have:

* An Azure subscription with access to [Azure OpenAI Service](https://azure.microsoft.com/products/ai-services/openai-service?ocid=buildia24_60days_blogs)
* [Azure command-line interface (CLI)](https://learn.microsoft.com/cli/azure/?ocid=buildia24_60days_blogs) installed
* [Azure Functions Core Tools](https://github.com/Azure/azure-functions-core-tools) installed
* An Azure OpenAI Service resource with a GPT-4 Vision model deployed
* The deployment name, endpoint, and API key for your OpenAI Service
* The [Fashion Product Images dataset](https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small) from Kaggle
* [Node.js 20](https://nodejs.org/en/download/) or later installed on your local machine 
* A text editor that supports Vue and TypeScript. If you use Visual Studio Code, consider installing the [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to ensure the editor understands all the files you’re about to create. 

For a preview, refer to the complete code for [part 1 available on GitHub](https://github.com/rogerwinter/Microsoft-Creating-a-Virtual-Stylist-Chatbot/tree/main/stylist-backend).


### Creating a Chatbot Interface for Your Virtual Stylist

In this section, you’ll create a chatbot interface for the virtual stylist app using Vue and vue-advanced-chat. You’ll use Vue to create the main components of the app, including the header, the footer, the chat window, and the image upload button. You’ll also use the vue-advanced-chat library to create the chat messages, chat input, and other chat options, using Tailwind CSS to style the app.

:::info
Complete the **[Intelligent Apps Skills Challenge](https://aka.ms/intelligent-apps/apps-csc?ocid=buildia24_60days_blogs)** to compete for the leaderboard and earn a Microsoft Learn Badge.
:::

#### Setting Up the Project

The first step is creating a new Vue project using Vite. Vite is a fast and lightweight build tool that provides a smooth developer experience and supports features like hot module replacement, code splitting, and tree shaking.

To create a new Vue project with Vite, run the following command in your terminal:

```
npm init vite@latest virtual-stylist-chat -- --template vue-ts
```

This builds a new folder, `virtual-stylist-chat`, with the following structure:

```
virtual-stylist-chat 
├── index.html 
├── package.json 
├── public 
│   └── favicon.svg 
├── src 
│   ├── App.vue 
│   ├── assets 
│   │   └── logo.svg 
│   ├── components 
│   │   └── HelloWorld.vue 
│   ├── main.ts 
│   └── shims-vue.d.ts 
└── tsconfig.json 
```

Next, add a few dependencies:

* [vue-advanced-chat](https://github.com/advanced-chat/vue-advanced-chat), a feature-rich and highly customizable Vue chat component library that provides many out-of-the-box features for chat interfaces. These include images, videos, files, voice messages, emojis, link previews, typing indicators, reactions, markdown text formatting, online presence indicators, delivery and read receipts, theming and customization options, and responsive design.
* [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/), and [autoprefixer](https://www.npmjs.com/package/autoprefixer) to simplify styling the app
* [uuid](https://www.npmjs.com/package/uuid) to generate unique IDs for each message

To install the required packages, run the following command:

```
npm install --save vue-advanced-chat tailwindcss@latest postcss@latest autoprefixer@latest uuid @types/uuid 
```

This command adds vue-advanced-chat, Tailwind, and PostCSS as dependencies in the `package.json` file.

Now that you’ve set up the project and installed the dependencies, check that it builds as expected by running `npm run dev`. The app should build and provide an address to view it in a web browser. Load it, and you should see the default welcome screen:

![the Vite + Vue welcome page displays both logos and provides links to create-vue and Volar.](../../static/img/60-days-of-ia/blogs/2024-03-27/6-2-2.png)

Next, generate the `tailwind.config.js` and `postcss.config.js` files using the following command:

```
npx tailwindcss init -p
```

Edit the `tailwind.config.js` file and add the paths to your template files in the `content` property:

```
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*. {vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Then, replace the content of `style.css` file in the `src` folder with the following code to import Tailwind CSS using the `@tailwind` directives:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then, import the `styles.css` file in the `main.ts` file and remove the unused import:

```
import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css"; // import Tailwind CSS

createApp(App).mount("#app");
```

Finally, copy the images from the [dataset](https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small) you downloaded in the first part of this series. Using your preferred CLI or file manager, create a new folder called `Images` inside the project’s `public` folder, and then copy all the images from the dataset’s `images_compressed` folder to the `Images` folder. The stylist bot will use these images to make recommendations based on the image IDs it returns.

The result should look like this:

```
virtual-stylist-chat 
├── index.html 
├── package.json 
├── public 
│   ├── favicon.svg 
│   └── images 
│       ├── 10001.jpg 
│       ├── 10002.jpg 
│       ├── 10003.jpg 
│       ├── ... 
│       ├── 19998.jpg 
│       ├── 19999.jpg 
│       └── 20000.jpg 
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.ts
│   ├── styles.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── shims-vue.d.ts
└── tsconfig.json
```

Now, it’s time to start coding the chatbot interface.

#### Coding the Chatbot Interface

In this section, you’ll prepare your virtual stylist app’s chatbot interface. You’ll use Vue to create the main components, including the header, the footer, the chat window, and the image upload button. Then, you’ll use the vue-advanced-chat component to create the chat messages, input, and options.

To keep things simple, we’ll link to the code of non-essential components like the header and footer. Since these aren’t critical to how the app functions, feel free to copy and paste them into your codebase.

##### Header and Footer

Start by creating two files in the `src/components` folder: `Header.vue` and `Footer.vue`. Next, copy the code from the [header](https://github.com/contentlab-io/Microsoft-Creating-a-Virtual-Stylist-Chatbot/blob/main/stylist_frontend/src/components/Header.vue) and [footer](https://github.com/contentlab-io/Microsoft-Creating-a-Virtual-Stylist-Chatbot/blob/main/stylist_frontend/src/components/Footer.vue) files in the GitHub repository into the files you just created.

These files are simple Vue components that use HTML and CSS to create a stylish header and footer for the app. If you’d like to customize them, replace the logo image link in the header with a link to an image of your own.

Now, it’s time to dive into the chat interface that makes this app work.

##### Creating the Chat Window Component

The chat window component displays the messages between the user and the stylist bot. To start, create a new file called `ChatWindow.vue` inside the project’s src/components folder. Then, add the following code to it:

```
<template>
  <div class="chat-window h-screen">
    <vue-advanced-chat
      .messages="messages"
      .options="options"
      .rooms="[{ roomId: 'main', roomName: 'Stylist Chat', avatar: '/images/logo.svg', users: [currentUser]}]"
      :rooms-list-opened="false"
      :rooms-loaded="true"
      :messages-loaded="true"
      :current-user-id="currentUser._id"
      accepted-files=".png, .jpg, .jpeg"
      show-audio="false"
      @send-message="onInputSubmit"
      .message-actions="[{
        label: 'Send',
        action: (message: Message) => {
          console.log('Send message ' + message.content);
        },
      }]"
      v-bind="{
        'current-user-id': currentUser?._id || '',
        'room-info-enabled': false,
       }"

       />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { VueAdvancedChat, Message, register, RoomUser } from "vue-advanced-chat";
register();
import { v4 as uuidv4 } from "uuid";

function toTimeString(date: Date): string {
  let month = date.toLocaleString('default', { month: 'short' });
  return `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

export default defineComponent({
  name: "ChatWindow",
  components: {
    VueAdvancedChat,
  },
  setup() {
    // Define the current user, the messages, and the options for the chat component
    const currentUser: Ref<RoomUser> = ref({
      _id: "user",
      username: "User",
      avatar: "",
      status: { state: "online", lastChanged: new Date().toDateString()},
    });
    const messages: Ref<Array<Message>> = ref([]);
    const options = ref({
      enableVoiceMessages: false,
      enableReactions: false,
      enableSeenBy: false,
      enableLinkPreview: false,
      enableUploads: true,
      enableAttachments: false,
      enableReply: true,
      enableEdit: false,
      enableDelete: false,
      enableGroup: false,
      enableSearch: false,
      enableOptions: false,
      enableScrollToBottom: true,
      enableScrollToTop: false,
      enableLoadMore: false,
      enableComposer: true,
      enableInput: true,
      enableSendButton: true,
      enableEmojis: false,
      enableRecording: false,
      enableMarkdown: true,
      enableTypingIndicator: true,
      enableOnlinePresence: false,
      enableCustomTheme: true,
      enableRooms: false,
      customTheme: {
        primaryColor: "#333333",
        secondaryColor: "#f0f0f0",
        tertiaryColor: "#ffffff",
        quaternaryColor: "#e0e0e0",
        quinaryColor: "#999999",
        senaryColor: "#666666",
        septenaryColor: "#333333",
        octonaryColor: "#f0f0f0",
        nonaryColor: "#ffffff",
        denaryColor: "#e0e0e0",
      },
    });

    // Update the image preview in the chat message after it's uploaded
    const updateMessageImage = (newMessage: Message, url: string) => {
      const existingMessage = messages.value.find(m => m._id === newMessage._id);
      // Update the URL of the first message file
      const message = existingMessage || newMessage;

      if(message && message.files && message.files.length > 0) {
        message.files[0].url = url;
        const existingMessages = messages.value.filter(m => m._id !== message._id);
        //set a new message ID to prevent file from being overwritten
        message._id = uuidv4();
        messages.value = [...existingMessages, message];
      }
    }

    const onInputSubmit = async (event: CustomEvent) => {
      // Create a new message object with the content and the current user
      console.log("called!")
      let content = event.detail[0].content;
      let files = event.detail[0].files;
      const newMessage: Message = {
        // generate uuid
        _id: uuidv4(),
        content,
        senderId: currentUser.value._id,
        date: new Date().toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric' }),
        timestamp: toTimeString(new Date()),
      };

      if(files) {
        newMessage.files = [...files.map((file: any) => {
          var messageFile = {
            name: file.name,
            size: file.size,
            type: file.type,
            url: file.url || file.localUrl, 
            extension: file.extension,
            preview: file.localUrl,
          }
          const reader = new FileReader();
          reader.readAsDataURL(file.blob);

          reader.onload = () => { 
            // Get the base64-encoded string from the reader result 
            messageFile.url = reader.result as string;
            // reload messages so UI updates
            messages.value = [...messages.value];
            updateMessageImage(newMessage, messageFile.url!);
            callBackendFunction(content, reader.result as string);
          };
          return messageFile;
        })];
      } else {

        // Push the new message to the messages array
        messages.value = [...messages.value, newMessage];
        // Call the backend function to get the response from the stylist bot
        callBackendFunction(content, "");
      }
    };

    const callBackendFunction = async (prompt: string, image: string) => { 

      // Get the previous prompts and responses from the messages array 

      const context = messages.value 

        .filter((message) => message.content || message.replyMessage) 

        .map((message) => ({ 

          prompt: message.content, 

          response: message.replyMessage, 

        })); 

      // Create a JSON object with the prompt, the image, and the context 

      const data = { 

        prompt, 

        image, 

        context, 

      }; 

      // Send a POST request to the backend function URL with the data 

      const response = await fetch("<backend function URL>", { 

        method: 'POST', 

        headers: { 

          'Content-Type': 'application/json', 

        }, 

        body: JSON.stringify(data), 

      }); 

      // Get the response data from the fetch response 

      const responseData = await response.json(); 

      // Create a new message object with the response data and the stylist bot 

      const newMessage: Message = { 

        _id: uuidv4(), 

        content: responseData.response, 

        files: responseData.images, 

        senderId: "stylist-bot", 

        date: new Date().toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric' }), 

        timestamp: toTimeString(new Date()), 

      }; 

      // Push the new message to the messages array 

      messages.value = [...messages.value, newMessage]; 

    }; 

  

    // Return the current user, the messages, the options, and the event handlers 

    return { 

      currentUser, 

      messages, 

      options, 

      onInputSubmit, 

    }; 

  }, 

   

  mounted() { 

    // Add a welcome message from the stylist bot when the component is mounted 

    this.messages = [...this.messages, { _id: "stylist-bot", content: "Hello! I'm your virtual stylist chatbot. You can ask me for fashion advice, recommendations, and more. You can also upload images of clothing items and accessories to get personalized suggestions. How can I help you today?", senderId: "stylist-bot", date: new Date().toTimeString()}]; 

  }, 

}); 

  

</script> 

   

<style scoped> 

.chat-window { 

  @apply h-screen flex-1 overflow-y-auto; 

} 

</style> 
```