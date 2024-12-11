"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82457],{21691:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(85893),n=t(11151);const r={slug:"zero2hero-func-03",title:"\ud83d\ude80 | Use Custom Handlers For Go",authors:["melony"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Azure functions support multiple programming languages including C#, F#, Java, JavaScript, Python, typescript, and PowerShell. If you want to get extended language support with Azure functions for other languages such as Go, and Rust, that\u2019s where custom handler comes in.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},i=void 0,a={permalink:"/Cloud-Native/blog/zero2hero-func-03",source:"@site/blog/zero-to-hero/2022-09-12-azurefunctions.md",title:"\ud83d\ude80 | Use Custom Handlers For Go",description:"Azure functions support multiple programming languages including C#, F#, Java, JavaScript, Python, typescript, and PowerShell. If you want to get extended language support with Azure functions for other languages such as Go, and Rust, that\u2019s where custom handler comes in.",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:5.135,hasTruncateMarker:!1,authors:[{name:"Melony Qin",title:"Product Manager, Azure Functions @Microsoft",url:"https://github.com/cloudmelon",imageURL:"https://github.com/cloudmelon.png",key:"melony"}],frontMatter:{slug:"zero2hero-func-03",title:"\ud83d\ude80 | Use Custom Handlers For Go",authors:["melony"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Azure functions support multiple programming languages including C#, F#, Java, JavaScript, Python, typescript, and PowerShell. If you want to get extended language support with Azure functions for other languages such as Go, and Rust, that\u2019s where custom handler comes in.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},unlisted:!1,prevItem:{title:"12. Build With Dapr!",permalink:"/Cloud-Native/blog/12-build-with-dapr"},nextItem:{title:"\ud83d\ude80 | Journey to the Cloud With ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-04"}},u={image:t(91871).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Custom Handlers: What and Why",id:"custom-handlers-what-and-why",level:2},{value:"How a Custom Handler Works",id:"how-a-custom-handler-works",level:2},{value:"Message processing with Custom Handlers",id:"message-processing-with-custom-handlers",level:2},{value:"Azure portal monitoring",id:"azure-portal-monitoring",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Head:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r,{children:[(0,o.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-func-03"}),(0,o.jsx)("meta",{name:"twitter:title",content:"#ZeroToHero: Serverless Go Apps Using Custom Handlers"}),(0,o.jsx)("meta",{name:"twitter:description",content:"#ZeroToHero: Serverless Go Apps Using Custom Handlers"}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.jsx)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/building-serverless-go-applications-with-azure-functions-custom/ba-p/3623617"})]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsxs)(s.p,{children:["Welcome to ",(0,o.jsx)(s.code,{children:"Day 12"})," of #30DaysOfServerless!"]}),"\n",(0,o.jsxs)(s.p,{children:["Today, we have a special set of posts from our ",(0,o.jsx)(s.a,{href:"/serverless-september/ZeroToHero",children:"Zero To Hero \ud83d\ude80"})," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,o.jsxs)(s.em,{children:["Posts were originally published on the ",(0,o.jsx)(s.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/building-serverless-go-applications-with-azure-functions-custom/ba-p/3623617?WT.mc_id=javascript-99907-cxa",children:"Apps on Azure"})," blog on Microsoft Tech Community."]})]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"What are Custom Handlers, and why use them?"}),"\n",(0,o.jsx)(s.li,{children:"How Custom Handler Works"}),"\n",(0,o.jsx)(s.li,{children:"Message Processing With Azure Custom Handler"}),"\n",(0,o.jsx)(s.li,{children:"Azure Portal Monitoring"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Custom Handlers for Serverless Go Apps by Melony Qin with an illustrated flowchart.",src:t(17386).Z+"",width:"1600",height:"672"})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsxs)(s.p,{children:["If you have been working with ",(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-99907-cxa",children:"Azure Functions"})," for a while, you may know Azure Functions is a serverless FaaS (Function as a Service) offered provided by Microsoft Azure, which is built for your key scenarios, including building web APIs, processing file uploads, responding to database changes, processing IoT data streams, managing message queues, and more."]}),"\n",(0,o.jsx)(s.h2,{id:"custom-handlers-what-and-why",children:"Custom Handlers: What and Why"}),"\n",(0,o.jsxs)(s.p,{children:["Azure functions support multiple programming languages including C#, F#, Java, JavaScript, Python, typescript, and PowerShell. If you want to get ",(0,o.jsx)(s.strong,{children:"extended language support with Azure functions for other languages"})," such as Go, and Rust, that\u2019s where custom handler comes in."]}),"\n",(0,o.jsx)(s.p,{children:"An Azure function custom handler allows the use of any language that supports HTTP primitives and author Azure functions. With custom handlers, you can use triggers and input and output bindings via extension bundles,  hence it supports all the triggers and bindings you're used to with Azure functions."}),"\n",(0,o.jsx)(s.h2,{id:"how-a-custom-handler-works",children:"How a Custom Handler Works"}),"\n",(0,o.jsx)(s.p,{children:"Let\u2019s take a look at custom handlers and how it works."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"A request is sent to the function host when an event is triggered.  It\u2019s up to the function host to issue a request payload to the custom handler, which holds the trigger and inputs binding data as well as other metadata for the function."}),"\n",(0,o.jsx)(s.li,{children:"The custom handler is a local HTTP web server. It executes the function code and returns a response payload to the Functions host."}),"\n",(0,o.jsx)(s.li,{children:"The Functions host passes data from the response to the function's output bindings which will be passed to the downstream stream services for data processing."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Check out ",(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-custom-handlers?WT.mc_id=javascript-99907-cxa",children:"this article to know more about Azure functions custom handlers"}),"."]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"message-processing-with-custom-handlers",children:"Message processing with Custom Handlers"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/architecture/guide/technology-choices/messaging?WT.mc_id=javascript-99907-cxa",children:"Message processing"})," is one of the key scenarios that Azure functions are trying to address. In the message-processing scenario, events are often collected in queues. These events can trigger Azure functions to execute a piece of business logic."]}),"\n",(0,o.jsxs)(s.p,{children:["You can use the Service Bus trigger to respond to messages from an ",(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messaging-overview?WT.mc_id=javascript-99907-cxa",children:"Azure Service Bus queue"})," - it's then up to the Azure functions custom handlers to take further actions to process the messages. The process is described in the following diagram:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Building Serverless Go Applications with Azure functions custom handlers",src:t(26179).Z+"",width:"999",height:"188"})}),"\n",(0,o.jsxs)(s.p,{children:["In Azure function, the ",(0,o.jsx)(s.code,{children:"function.json"})," defines the function's trigger, input and output bindings, and other configuration settings. Note that every function can have multiple bindings, but it can only have one trigger. The following is an example of setting up the Service Bus queue trigger in the function.json file :"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n "bindings": [\n   {\n     "name": "queueItem",\n     "type": "serviceBusTrigger",\n     "direction": "in",\n     "queueName": "functionqueue",\n     "connection": "ServiceBusConnection"\n    }\n   ]\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["You can add a binding definition in the function.json to write the output to a database or other locations of your desire. ",(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=csharp#add-bindings-to-a-function&WT.mc_id=javascript-99907-cxa",children:"Supported bindings can be found here"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["As we\u2019re programming in Go, so we need to set the value of ",(0,o.jsx)(s.code,{children:"defaultExecutablePath"})," to handler in the ",(0,o.jsx)(s.code,{children:"customHandler.description"})," section in the ",(0,o.jsx)(s.code,{children:"host.json"})," file."]}),"\n",(0,o.jsxs)(s.p,{children:["Assume we\u2019re programming in Windows OS, and we have named our go application as ",(0,o.jsx)(s.code,{children:"server.go"}),",  after we executed ",(0,o.jsx)(s.code,{children:"go build server.go"})," command,  it produces an executable called ",(0,o.jsx)(s.code,{children:"server.exe"}),". So here we set ",(0,o.jsx)(s.code,{children:"server.exe"})," in the ",(0,o.jsx)(s.code,{children:"host.json"})," as the following example :"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'  "customHandler": {\n    "description": {\n      "defaultExecutablePath": "./server.exe",\n      "workingDirectory": "",\n      "arguments": []\n    }\n  }\n'})}),"\n",(0,o.jsxs)(s.p,{children:["We\u2019re showcasing a simple Go application here with Azure functions custom handlers where we print out the messages received from the function host. The following is the full code of ",(0,o.jsx)(s.code,{children:"server.go"})," application :"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"log"\n\t"net/http"\n\t"os"\n)\n\ntype InvokeRequest struct {\n\tData     map[string]json.RawMessage\n\tMetadata map[string]interface{}\n}\n\nfunc queueHandler(w http.ResponseWriter, r *http.Request) {\n\tvar invokeRequest InvokeRequest\n\n\td := json.NewDecoder(r.Body)\n\td.Decode(&invokeRequest)\n\n\tvar parsedMessage string\n\tjson.Unmarshal(invokeRequest.Data["queueItem"], &parsedMessage)\n\n\tfmt.Println(parsedMessage)\n}\n\nfunc main() {\n\tcustomHandlerPort, exists := os.LookupEnv("FUNCTIONS_CUSTOMHANDLER_PORT")\n\tif !exists {\n\t\tcustomHandlerPort = "8080"\n\t}\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("/MessageProcessorFunction", queueHandler)\n\tfmt.Println("Go server Listening on: ", customHandlerPort)\n\tlog.Fatal(http.ListenAndServe(":"+customHandlerPort, mux))\n\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Ensure you have ",(0,o.jsx)(s.a,{href:"https://github.com/Azure/azure-functions-core-tools",children:"Azure functions core tools"})," installed, then we can use func start command to start our function. Then we\u2019ll have have a ",(0,o.jsx)(s.a,{href:"https://github.com/cloudmelon/cloud-native-serverless/tree/main/message-sender-servicebus/MessageSendToServiceBus",children:"C#-based Message Sender application"})," on Github to send out 3000 messages to the Azure service bus queue. You\u2019ll see Azure functions instantly start to process the messages and print out the message as the following:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Monitoring Serverless Go Applications with Azure functions custom handlers",src:t(85367).Z+"",width:"382",height:"324"})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"azure-portal-monitoring",children:"Azure portal monitoring"}),"\n",(0,o.jsx)(s.p,{children:"Let\u2019s go back to Azure portal portal the events see how those messages in Azure Service Bus queue were being processed. There was 3000 messages were queued in the Service Bus queue ( the Blue line stands for incoming Messages ). The outgoing messages (the red line in smaller wave shape ) showing there are progressively being read by Azure functions as the following :"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Monitoring Serverless Go Applications with Azure functions custom handlers",src:t(23745).Z+"",width:"998",height:"301"})}),"\n",(0,o.jsxs)(s.p,{children:["Check out ",(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/service-bus-messaging/monitor-service-bus?WT.mc_id=javascript-99907-cxa",children:"this article about monitoring Azure Service bus"})," for further information."]}),"\n",(0,o.jsx)(s.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(s.p,{children:["Thanks for following along, we\u2019re looking forward to hearing your feedback.  Also, if you discover potential issues, please record them on ",(0,o.jsx)(s.a,{href:"https://github.com/Azure/azure-functions-host/issues",children:"Azure Functions host"}),"  GitHub repository or tag us ",(0,o.jsx)(s.a,{href:"https://twitter.com/AzureFunctions",children:"@AzureFunctions on Twitter"}),"."]}),"\n",(0,o.jsxs)(s.admonition,{title:"RESOURCES",type:"info",children:[(0,o.jsx)(s.p,{children:"Start to build your serverless applications with custom handlers, check out the official documentation:"}),(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-custom-handlers?WT.mc_id=javascript-99907-cxa",children:"Getting started with Azure functions custom handlers"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-other?tabs=go%2Cwindows&WT.mc_id=javascript-99907-cxa",children:"Create a Go or Rust function in Azure using Visual Studio Code"})}),"\n"]})]}),"\n",(0,o.jsx)(s.p,{children:"Life is a journey of learning.  Let\u2019s stay tuned!"})]})}function l(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},91871:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/zero-to-hero-david-2236e6d82fe0064fef5a652807264fd7.png"},85367:(e,s,t)=>{t.d(s,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAAFECAIAAACvWcJgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dMXLbOPuHvyuk8Hg8zvgS6f6V2/SbJoUKV0nvmdV2nkwaVZlU32R1gS3UZU/gJtt8F/AF9hr/AUgC7wu8AClIChXxeSaza0MkQUrizwBIPPzPHQDAT+c/P79KAACiBwBmgOgBgBkgegBgBogeAJgBogcAZoDoAYAZIHoAYAaIHgCYAaIHAM49ej58/u/Al/W7vOg3a8n/fv5QW12udffujy9xkT/edat8/qh2wi2T1z6UHI/CIciKPn52r3wUCw4L52/Luz++iAN5t/7yZf3bu3U83HDIR+I3te1QtfkOJ++htavG6vFdMd+0fmvyGON2/OcqVv/4eTh28ZGGd0O+w2Gt39Zf5Bbk8R7xy/Dnj38VP77d3X37R/z+593d799fwu//fOvWc8sMP/e4xV6+/969+jL8oBf788fL3+vwW/Lq+u8XV92JcG9yfEPVBz28pfps/eC//fZ5nX3NDo8euWlfb9ybj5+HinVexEOKq7u9/mhHjw6aD5+/fFHfsO6r3G2nO/NPwvgh3KU7oF6Kx+VOCbdQ/XxO4vUIqDPTHU73DbDe4fRDKe1qmhd5jerPT/9hxW+eWODD58+fh+pk9IR9KJ0ScR/y6DnVl8GFwI+X7yESQnD0/P79pQ+I9fcXH0Z+mZcXl1OB9d8v/xrR8+PHP/0qWfR8+/Hvy8tLrOuk0fPh83+/fPlixkT4MhejR3yFCl+z40VP+KTF3vS7ElIp8O6P7pDC6vLbPBY9nz+oZdx3dN1tJ6/oWEw4hMnR4w529ugpJaDc7bhL9q7+5v5faU3YqZGsMrxjrtaP/S515f7tdVGlN2KWDPtzdtHj0qHLjm///PiW5MjL9+8xcV7iD3+6vOrXl6v4n8MGTxw9/mtgfsSxQToePeHzPWH0hHhTrZ7+W2V9BXUvpHAwqp3mN+JrjGd4dxrLs8Vu9x9I7RD2jZ7h9Js5ekQCpu9w9qGYuzqEb4nwRRRV5qsMX+7u/YkRH77fXb9JtXLSzfafTqXDdfxvRBI9oX/lE0S1emS4fPsxZEqXGipxfo8/uAZRtwURPf0yv7tNrk8dPTH6k3Zr6Q9qsdUTGs55Z/9IYz3DpxuLRMnoeRu+lBM6XOt3w2kzfNv0+e+/c8ccJTlO9KTv1PlET6nDFT6UsegZhm/UX8iW6Invg/jTOnxxuwX2iZ4ZWz0yicQyQ1isv/vOVyl67kJmxegJNcY4O130hNMw+ciS03N0rEcOKZ6sw5XujWsGmXtv91bSr2Bpj/tVui3EutLdyNP6IGqHIM+ESR0uc5tzdLiMxlfWiRbvdrqrycha2ji3PoJ8ME52uMJYmG/YFkIq3+z5drhi4yVpswyBUo6eu2RJPzAUCYUniR59RSL+Rck+FP0nOWv1iP71z4we+V0cH6Pds9UzjDfHn08bPeVDkOOmyTDESPSo4VI9CHLy6PHfLWsI2f5QCruajRnn4zgxad6tP3fBURpmVslrDHCG7f9Kw8yuLxaGmUO4hKHiWvTc+XGil25kJ7Z0+tp9x+1E0ZO1dMRYR7akuobVv+GjDedTR0+yN8aVzvq1eXfA2bVbdVTDwcSm0OgFvAMwD6Fw9XdK9Kgd1n2hE0WP/ENWvDpuH2ZhV+0r5ZF4FVyOsme99PT9CQlV2L64uK6DTOy5Ot6jh1BprMe3R0T0dJelvv+umzNJU6gQPXf+Alm/QVFdSDTZFJLX4A8j+7PtW6byxJRvqXU7i/zm93+Px27CcHBLIQDMANEDADNA9ADADBA9ADADRA8AzADRAwAzQPQAwAwQPQAwA0QPgMG/vwh3vyxEDwDMANEDADNA9ADADBA9ADADRA8AzADRAwAzQPQAwAwQPQAwA0QPAPwK0fP28WvPp4fT7BL8KsTvwuPb6oKr3au/nm/u716vn1/9tftp+3e+rHhDmqLn08MbVfTm4ZP1FTRKzSULq5tYi8owfDNh93Vo5rXH7X1NXslrF2uP7b99mFN3Xu7U3qsnexnfgfLq3SrdYvnq+jgfPu0fPffbq7/+d7V+371+u/nf+UaS39VX/t/1Ki3p/223w9JP1+rXoaT/Nxzjiug5RvQ8fBoK3De5/9n9KE7lrtRc0iwsVW1tM6wjXi+v/+BXqO/88JL63az9TVx/hMKxT975gAuCA1YXi1ZWd2ny6D5pa+30iMejx52r/qxb7frT0v3wfLV58i8/XW+f+wXOjvc3WxeaMi8SXG52B+IW2N2sn0X0vL/ZDoEll7zP3pDlcYxWj3rRfwvF6RFOFnvJ8cIBc5t6DVdYXP/to98Ha2fs2o36siMqR49vUNg7M1RU2/n66r7OPY59v9X7Y/ULJiubxzu1Zslq92qzvdn2p9/16um6P6vdudq3Efpg0oUxocYKk5ZI/FepqI7bTsgRUdht8Ona1+hadqrqmFbupal1XT6niR75re0b9cmXc//osbapCpNlCjRGT+GIDo2e4s6XVw+L7X/sKmJKq4eQzTdYiLfW6Hl6vX6+Xt3dbna3wyka2wU+GroemXnGFgp3w3keV9dtjT47zIoaoiffDR09oi8paocjR0/Xk4gL9WMEj2+zleKS5uqVivU2dV5k4zj7RE9eex49+RGpYZBp55+oaL+dD1XJVfY6dv3p2avHJbLoKUVMQ/T0Z+z99mqzu3anrose/1/R7Ro6I+bg9OiI9RAKMi9CytgV1XEhki6mGjWx3mQx1xELrS04dvT4k1B9k/VgbDKsnH5X08L8nC5tU15mefvYv16OBDN6zF1Ko6d8RGH50VMwrcjc+THiju25enrs+epJ425aq6o9euJQiBtSqQzf+raD+yebJ0ZhsoWhCtHq8ed/bZy4vMNm/GUrGq2eMLyl93/hHCd6/BklivXIiPzWpkuWC1PK25SLjA765tFTqr0y1lOqvX4K1g9z+oi1WdGE1Wv92W514+JeDP7i5tuiR5+ELiDi4GsR14TJzt5QqF4NXaGQUPHMH68o3VurzWIO/ejoCWHX4cehp9d72RwheswzqisLP4frQY25U96m2s7EwQ6xWKX2pIp67XZ7Jm3G1XJH7/yEoaLK6vLSeLGKsZf0H4zKJ3S06JEtFBtzXEZ2o/T1765PZ5ztoxWpXTX7SmaTx4oefYVrqdezThE92V9KcX7qe0bMJYurm2TbNO/0GVl3Yu15vtRqT5dNssOuqLzzafSYHcji6nn0WF3KkbdODTwnqBUaoud2kySI7HkljRRVIseGs8IuJvprXjdWq0d0efKKTJKrY0N2GGPGepfCkv1Az6Ru3aI47hUuWCItV7h+GkmrJ+kBwXwQPXDR0aOHV5jJcT4whwtOP4drVnSHi1Hec4GZ6wAwA0QPAMwA0QMAM0D0AMAMMMwMzaAKa2WFrwdVGKoweUOkKRVDFbaHKmx4Vd/QrFYnejyowlCFFad3WaWowtJ3Sfg3htuyN2EqfME0do8qDFVY+URbrCosXVKAKqysCosTuF7bFg57uuliQRUWQBWWTTc1poahCiurwsIsDaJnAqjCelCFZVPnpzqYUYWlc2Kt6GHaegKqMAeqsMQ0Zmg0UIXVVWEybrLoYe5YDqowVGH5IE4+vowqbEQVlqg55CWtkvFn4aAKQxVm6dOycR9UYRNVYUmrh9wpgSoMVZhu4eSdT1Rhk1RhZvQUTGOArwcu3NeDKuxcQRUGFx09qMLOFeZwQTOowqAdZq4DwAwQPQAwA0QPAMwA0QMAM8AwMzSDKqyVFaowVGGowtJnp07wh+lr6eMX1/Mzzd+SF5756WchnOtjag5ThckJFqjCJKjCUIWpSVtj/jBUYXupwu7sB5/eowpDFaZOqsWrwsb8YajCDlOFMYk0giosgCrsITVjJL+iCjtEFWbn0XJBFdaDKsynjMxfP+gjogdVWJYdU1RhrguWjvUAqrAOVGFRFVbyh6EKO0AVFjIojKwDqjBUYcVBHFGIKqxdFWb3zhYPqjBUYZYOVReiCmtWhQl4IoUCVRiqMHVhzyhEFdauCosDPYz1JODrgYv29aAKO1eIHrjo6EEVdq4whwuaQRUG7TBzHQBmgOgBgBkgegBgBogeAJgBhpmhGVRhraxQhaEKW4IqrLwBc5/SQlRhB6jC5ANI4wSuFdGDKmwZqjB5601Y1Dwis1CAKmwvVZicMiomUtyjCkMVtghVmMqLfknziAqHGUAVtp8qLL+hkemjA6jCFqEKi5sLfhDriEqH2YMqbF9VWDKPFFuYAFXYYlRhfZRoDYY+otJhhh0wD7FhIkV/xt5vrza7a3fquraD/+8uP1GjTD7ZQtUkP4SCnC8euj92RXWaVGGydj/og6jw6NGjbFvJH0z919L0cqWF+Tld2qaptipHQlEQke1SGj3lIwrLj56CaUUlL1eVuGOTV49512fUG/OIaoeJKqxNFeb6XN0w8+52taPDFUAVtgBVWL7zXx/tIyoeJqqw46jCsBQGUIUtQBWm9y20gMwjMgtRhR2uCqstv0hQhWm0BT2JitCLC+WiX5csm2RHdrNQOPntcaI0eswOZHH1JHqS+vUx5nufFqIKO4oqjGtbGnw9cNG+HlRh5wrRAxcdPajCzhXmcEEzqMKgHWauA8AMED0AMANEDwDMANEDADPAMDM0gyqslRW+HlRhqMKymxJRhSkOVYVZhSuiB1UYqrCh/YIqzOL9zXaYRTHkxT6qsELhPaowVGERVGGowuqo+aKTVGHlQkAVFkAVhirs2KqwUiGgCgugCkMVdgJVmF0IqMJ6UIWhCqvHQaMqrOQPA1RhFZMOqjBUYQeqwqb4wxYLqjBUYQ5UYadWhdHqSUAVhioMVZh4OF/KgaqwscIFg68HLtrXgyrsXCF64KKjB1XYucIcLmgGVRi0w8x1AJgBogcAZoDoAYAZIHoAYAYYZoZmUIW1ssLXgyoMVZjx/FKfKfq5yQp9LX384np+pvlb8sKNfH7CQTpD6pdThfmj0xMmSlKxFdGDKgxVmFaFde6Qh/QZ8AE3wT2Z7zYePbkZy/3wfNXrJp6ut8/9Ar+yKuz1+rl8V7Ra8g5VGKowAaqwB/cm+MR5U4ieNzGqD7ulcLV7tdnebPs8ul4F+4T5kHJRGBNqrDDOWkgmQ1QqOkgVNhY9yrABqMICqMJigNjR88YOmdboeXq9fr5e3d1udrfDaSlkoy4aujNZ6bgGCoW74dyOq+u2Rp8dZkUHqsLq0WPu8JI5ZvRE21a3UD9G8Pg2Wyn3cpUK04r1NnVe6BGKAqW/56jC5GdkvkuliGmInv48vN9ebXbX7oR00eP/K7pdQ++s6Mqp9tGGU13mRUgZu6IDVWFqrCdNGZo8J4seZdvqL30Mv+q/lqaXKy1UQ5u+vLRNeZnl7WP/er76Xe2kQhVmfEbJu+Q/ePMr0R49nS991Q+pVJ70EMQ3sllhFCZbGKoQrR6fFPVHSrSpwhSi0pEll8txoie1bXXf3DfGt9b0cpVkXdlC9jblImNbMU4qVGH5+5m9S5XGbmP06L6JO1fTWeYGrgmTdWpCoXo1dHCkr6t/dbyivVVhxioxempLLhZUYajCHDrX0+ipZ/rRoidrLGSY4zKyG6Wvf3d9OiNlRis6TBWmbT40eUxQhaEKU6qw9B6e/gk5tRt7GqInytJ7ZM8raaSoEjk2nA+siNGW3Y3V6hG9s7yiA1VhcoMiqupSsQWDrwcu2teDKuxcIXrgoqMHVdi5whwuaAZVGLTDzHUAmAGiBwBmgOgBgBkgegBgBhhmhmZQhbWywteDKgxVWHKTYP6GoAqbpgpLbkFEFXby+3pM25aYUR5LzSUrsq68amubYZ3UemGun0iwUIVN+Yyqnz+qMEPKYYIq7PS+Hj3V05osbsZENTvMbeo1Cj6ZYeNVCRaqsCmfEaqwiirsdlOfMIE3Q4EqLIAqLMmZLHpQhdVUYT5Z1rtMnJgvCceOHlRhE9/AoX2xn+csjMHIVfbQpPWDwqI/tafODVVYTRUW5srbXjGaPCmowhyowsZ1bqjC6qowY55q/BVvRg6qMFRhU3RuqMJGVWG6XaOiB1WYAaowVGGOMIZf0kiiCkvIGzJCNa9+psljgioMVVgyAoQqrE0VVnjADqqwAvh64KJ9PajCzhWiBy46elCFnSvM4YJmUIVBO8xcB4AZIHoAYAaIHgCYAaIHAGaAYWZoBlVYKytUYajCUIWhCqtziCpMP/s03oK4InpQhZXNWMljyE1RWX2GgaSgSZvsObO8RdNXl7fehEWn69wEqMLqArCysse9Kqe579wPq13xwe2XDqqwab6egvysHD2+M2KHwVBRzXNWX93XuZcmLdn5x7dtOjdUYajCjgWqsACqMFRhdQ5ShS25gWOCKqxmxoqtgoJYSxnTp80mQBUWz9j77dVmd+1OXXfe+v/u8nO16MrJT+9kgX7LIS/c9M6r9ftSRXVaVWFxTmlVn7o4UIU5UIWhCqufJweqwnTwwfGiJ5W87KehKsq6soXsbcpFRgd980GNUu2VsZ5S7fWGT/0wp49YmxXVVs93/uvjnp8RqrBDVGE96JklqMJQhTlQhZ1OFTaAq1CBKgxVGKqw06nCRAljPRp8PXDRvh5UYecK0QMXHT2ows4V5nBBM6jCoB1mrgPADBA9ADADRA8AzADRAwAzwDAzNIMqrJUVvh5UYajC9NxX+fjRvkzNkTUmyo5fXM/PNH9LXriRz/u0anNBfwlVmD868wZCf1+ivPV5RfSgCkMVVtKCJZO8elCFpdEU5ky8Xj8bd0X7G4tuklkX96jCUIWpkwpV2EjKoAqrqMKs6Hm6Dg0iZD0aVGEBVGG625TPzi/MzW+5m3m1e7V5er1+vl7d3W52t8MJLGZdRsWEOeG7ULgb5nnG1U2BqVnRYaqwQqsnLEb0aFCF9aAKC22cMLSTBEopYhqi5wJVYclYj45FoicHVZgDVZjZosk9jcY36JDo8Vngc+H9zfa58qSH8FwH2awwCpMtDFWIVo9PitojJVpVYQpR6ciSywVVGKqwKfIzVGGjqrBaf5DoyUEVhirMYV3NioNfdYNiW6tHD4u4ZkLeWMgwx2VkN0pf/+76dEa/bLSiFlVYJLP5ED05qMJQhUlVWBzoqd3Xo6OmIXpuN0mCyJ5X7Af5ZVSJqeCSA73hgRDuerYvlw/hE72zvKIDVWFygyGq9H5O6NktB3w9cNG+HlRh5wrRAxcdPajCzhXmcEEzqMKgHWauA8AMED0AMANEDwDMANEDADPAMDM0gyqslRW+HlRhqMLMqaLd29JNrUAVNkUVVpsXhirsNPf1mLYtYaCIpeaSFVlXXrW1zbBOar0w13/wK9R3fnhJ/W7WXp9hMPou7bHzlsFr+ury1puwqHlEcflHc74oqrD0HbEery4KUYX9VF+PFtx1v9lLjhcOmNvUaxR8MsPG/T5YO2PXbtSXHVE5enxnxN6ZoaLaztdX93XudezJzj++rXxG/SuFCaX58bb6erY3Wz+7arW7XgX7RP7Y8mQ6wm5qYdLoiP8qFdUx54sqb0ZWiCqsCKqwAKowHyAhklCF7akKqxQyfTQHVVgPqrCuZRQbSFn0oAqrq8IqhURPDqowB6qwrhum4iaJHlRh01Rh0wsXDqowVGExWeSTcLQgA1XYRFWY7Q8jenJQhaEKK6jCRDMHVdhEVVgpYoieHFRhqMKUKsyIHlRhk1Rho/4wVGEKfD1w0b4eVGHnCtEDFx09qMLOFeZwQTOowqAdZq4DwAwQPQAwA0QPAMwA0QMAM8AwMzSDKqyVFaowVGGowlCF1ZmoCssEHcO9hbEkPuN0RfSgCkMVNrRfUIVZvL/ZDrMohrwoWsEKdzMPiZM8En7Xb3Op00pRhQVQhaEKO0gVdrvJXs1vaJyqJbt8UIUFUIWhCjtEFeYzaL1T4sSkUbPgNk4OqrAeVGGowuqMqMK6AaChUTMsLNMqk8MvG1RhDlRhqMLq58m4KsyYpzo0fIZ20K0zUtPh6kEVhirMgyrsUFWY9qImSTRsJ17kWjyowlCFOVCF7Zk7hv1LPhUnf0IOtrAEVGGowlCFiTtuUvZRhRkP2Gl45M5SwNcDF+3rQRV2rhA9cNHRgyrsXGEOFzSDKgzaYeY6AMwA0QMAM0D0AMAMED0AMAMMM0MzqMJaWeHrQRWGKkyrwpJHjbri/Omj+lr6+MX1/Ezzt+SFG/ncvb/ZtINLUYVZhSuiB1UYqjCtCqs/Xr2f66VfH4+e3Izlfni+CrqJ7XM+4+kiVGGVwl2/zaXOZUcVFkAV9jAaPearLbcUujnc25ttf/pdr8LcS3PmgXxy+W5qodUS8f8qFR1bFVYoBFRhElRhfe+qGD1v7JBpjZ6n1+vn69Xd7WZ3O5zAYtZlVIuacr9C4W5olcTVzVaJWdHxVWF2IThQhfWgCut6UmpgZ9qYTkP09Gfs/fZqs7t2p647Rf1/xck5dEaKrpzqmTyEgsyLkDJ2RcdXhdn+MHCgCnOgCjNbNC6FQpmPJvOkaY8enwU+F9yQSmX41o9D64c6mIXJFoYqRKvHJ0VtnPioqrCSPwxQhQ25Y3QylMLGLSSWsc7DQndkvKLwanV8d6SisY6S3vmvj3sekTG6fGD06D6OC4gJZ6ZrwmSdo1CoXg1doZBQMaR+nips3B+2WFCFoQorqMJEU7Aei0eLHtlCsTHHZWQ3Sl//7vp0xtk+WtHRVGF1f9iSQRWGKkypwsRQz1CW39ejo6Yhem43SYLInlfSSFElhoJLDKb4mOgHdG+sVo/oneUVnUIVhi2sCL4euGhfD6qwc4XogYuOHlRh5wpzuKAZVGHQDjPXAWAGiB4AmAGiBwBmgOgBgBlgmBmaQRXWygpfD6owVGHGTYI6U1CFHaQKkzclDvdVr4geVGGowoas6W9eNqfSqlRCFTZdFRbu0s6X3PUZtNS57KjCAqjC3PTRt4+1+wNRhe2pClPTR03H0GI5TfTIadB94z35PqfneblQVZxsM51vXRY7BLoJ27WdH1AzKgtHVJ5X6ReyD8Z6l9KdL68eFtvn2OPmQqPGfD+70gfV34qgCttbFSa00/a0r+WCKqwHVdjj10/9sM4QOMl7gipsb1VYHNkJYlboQRXmQBXWtWjSdo38FVVYgypMZpAPoGkm1kVwnOhJJVhlDZWpy6o7tEa3uZdtK+9woQoT76f+eGP0oAprUoUFL6I1l3XhoApDFeYIuS5HvMLPqMIaVWF6fAc3swRVGKowpQpTtrDgKEQV1qwK6wd6JhmgFwW+HrhoXw+qsHOF6IGLjh5UYecKc7igGVRh0A4z1wFgBogeAJgBogcAiB4AWAYMM0MzqMJaWeHrQRWGKgxVWJ2JqrCCP0w++zTegrgielCFoQob2i+owize32yHWRRDXiSYT1I3CuV8rntUYajCIqjCUIXVSeaLhkJzZunEwuWCKiyAKgxV2N7RY4oHbRvhgl2oJqjCelCFoQqrY807n9K6iXNKURRKUIU5UIWhCrurMq4KqxaGDEIVFkAVhirMgyrsUFVYpVBsBy38AKowVGEOVGF75s6+TZ6RVFogqMJQhaEKq/SD9lGFFZ7DZdzXA/h64MJ9PajCzhVUYXDR0YMq7FxhDhc0gyoM2kGaAQAzQPQAwAwQPQAwA0QPAMwAw8zQDKqwVlb4elCFoQqrP2j004NRqK+lj19cz880f/dduJHP+7R+cVVYdgtit7A/5OyuwhXRgyoMVViiCqtoRPqydMHx6MnNWO6H56t+QtPT9fa5X+CXVoVZtzi/Xj8bt0rfowpDFRZBFfYwmjJvYlQfdkvhavdqs73Z9nl0vQqiCeux5Wo6wm5qodUS8f8qFR2kCrvdGFMl7OgBVGECVGEqQN7kiWIUHRI9T6/Xz9eru9vN7nY4gYVXNCompuu4Xq93Q6skrm62SsyKDlOF+UNY75I0JHpKoArrQRWm2zh7dKwaoqc/Y++3V5vdtTt13Xnr/yu6XUPvrOjKqfbRhlCQeRFSxq7oIFVYNwA0pGFYWI31YMwQoApzoApLWjRG/6sX+hw1enwW+FxwQyqV4dvwXAfZPDEKky0MVYhWj0+K2jhxqyrMmKeaLC/2BFCFDbmTj2BEhc2wkFjGOg8L3ZHxisKrxdcmVFRbPd/5r4/VI8rHl41G0IHRo/s47rS0TtcE14TJOkehUL0aukLycTT9q+MVNajCtBfVqgJVmARVGKowh8yhvMlTj8WjRc94u8Acl5HdKH39u+vTGSlzElWYfABO4WE4KHsiqMJQhWlVWN75zO/r0a83RM/tJkkQ2fNKGimqRI4N52MoYmBld2O1ekTvLK/oYFWYcdVM1sKTcBT4euBQztrXgyrsXCF64KKjB1XYucIcLmgGVRi0w8x1AJgBogcAZoDoAYAZIHoAYAYYZoZmUIW1ssLXgyoMVVh6k2AMlL4UVdgUVVhxXphl51gRPajCUIUNcdPd0Cxv0kEVtp8qzCoUr4opZveowlCF6e6DvDWuMn00zHIqT27ybQf7TruhIl2hnhRaX93XWVu9sIpc0j4ia0kBqrCKKswoDHPlC9O+lsxx72YWJ1WYf9i335PTwvqDaheqipNtpjPIy2KHu4oOolC7OjULR3Ro9BR3vrx6WGyfY4+bC1O0CkdkLBlAFVZThVmF0gTkGk1nrKD+6aAK60EVFv+m9EmEKmwfVZhZ6KPndT8MFGWMgCqsB1VYaNHECPYBZLf7NKjCJKpXlbR09vQEXTbHafWkEqyyhsrUZdUdWqPb3Mu2ZcpoUIX176clFfNdLlRho6owq1CP9Uw0sS4EVGGowhx95OjmX2gBoQqbogqzCv2VdXGVnadTBFCFoQrT4zrytp6ueYgqbKIqbMwfRu5I8PXARft6UIWdK0QPXHT0oAo7V5jDBc2gCoN2mLkOADNA9ADADBA9ADADRA8AzADDzNAMqrBWVvh6UIWhCiurwvr7DFGFHaQKk7PTu1QAAAGESURBVM8vHSZwrYgeVGGowjJVmJzAbolNps5oj+RmLPfD81VwaG2fL1QVFh7orJe8RxWGKiyCKuxhVD+GKmw/VZh+1ZT7LBZUYQFUYWPqNVRh+6rCupZO16CzZ3gtF1RhPajCHr9+0vnbC3tGO1btvp777dVmd+3OUtc68P8V3a6hd+YWzrpjZqFRhbJYhLnjdkXHV4WF7buBHiRhp4kepVtIpKj6r6Xp5UoL1dCmLy9tU15mefvYv56vLjdsiX7yXUoFqeUjCsuPnoJpRebOjxF3bPLqhgBsr/cTVVgp/sa8GTGwfAAxeT2AKgxV2BT1GqqwI6nCznQ0fQZQhaEKc2g7Ydo8RBXWqArT4ztWl225HB49/yfUUsIvZWio3lpLmoVFsm3GktHeiuyDTak9PxtrtafLJo+UsCsq73z6RAqzA1lcvetvJgPGhWMcfz9RhR2iCusHeuSdPuDA1wMX7etBFXauED1w0dGDKuxcYQ4XNIMqDNph5joAzADRAwB3P5//ByGmE+9/bVhzAAAAAElFTkSuQmCC"},23745:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/melony-monitoring-1430568906cea1cff64b9a49f40419e0.png"},26179:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/melony-processing-42772dfd2586d1ff1cf70e085d3702e6.png"},17386:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/zero-to-hero-melony-a4e4f337b95ea7199352808d42961764.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var o=t(67294);const n={},r=o.createContext(n);function i(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);