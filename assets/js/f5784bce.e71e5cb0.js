"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18631],{31207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),r=n(11151);const s={slug:"zero2hero-func-02",title:"\ud83d\ude80 | Durable Entities Walkthrough",authors:["davidjusto"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Durable Entities are a special type of Azure Functions that allow you to implement stateful objects in a serverless environment.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},a=void 0,o={permalink:"/Cloud-Native/blog/zero2hero-func-02",source:"@site/blog/zero-to-hero/2022-09-06-azurefunctions.md",title:"\ud83d\ude80 | Durable Entities Walkthrough",description:"Durable Entities are a special type of Azure Functions that allow you to implement stateful objects in a serverless environment.",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:7.515,hasTruncateMarker:!1,authors:[{name:"David Justo",title:"Software Engineer @Microsoft",url:"https://github.com/davidmrdavid",imageURL:"https://github.com/davidmrdavid.png",key:"davidjusto"}],frontMatter:{slug:"zero2hero-func-02",title:"\ud83d\ude80 | Durable Entities Walkthrough",authors:["davidjusto"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Durable Entities are a special type of Azure Functions that allow you to implement stateful objects in a serverless environment.",tags:["serverless-september","zero-to-hero","azure-functions","azure-container-apps","dapr"]},unlisted:!1,prevItem:{title:"06. Functions for .NET Devs",permalink:"/Cloud-Native/blog/06-functions-dotnet"},nextItem:{title:"\ud83d\ude80 | Go Cloud-Native with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-01"}},l={image:n(91871).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Entities 101: Some Background",id:"entities-101-some-background",level:2},{value:"Entities 102: The programming model",id:"entities-102-the-programming-model",level:2},{value:"Entities for a micro-blogging platform",id:"entities-for-a-micro-blogging-platform",level:2},{value:"Defining Entity",id:"defining-entity",level:3},{value:"Interacting with Entity",id:"interacting-with-entity",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-func-02"}),(0,i.jsx)("meta",{name:"twitter:title",content:"#ZeroToHero: A Walkthrough of Durable Entities"}),(0,i.jsx)("meta",{name:"twitter:description",content:"#ZeroToHero: A Walkthrough of Durable Entities"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.jsx)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/a-walkthrough-of-durable-entities/ba-p/3616832"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Welcome to ",(0,i.jsx)(t.code,{children:"Day 6"})," of #30DaysOfServerless!"]}),"\n",(0,i.jsxs)(t.p,{children:["Today, we have a special set of posts from our ",(0,i.jsx)(t.a,{href:"/serverless-september/ZeroToHero",children:"Zero To Hero \ud83d\ude80"})," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,i.jsxs)(t.em,{children:["Posts were originally published on the ",(0,i.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/a-walkthrough-of-durable-entities/ba-p/3616832?WT.mc_id=javascript-99907-cxa",children:"Apps on Azure"})," blog on Microsoft Tech Community."]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"What are Durable Entities"}),"\n",(0,i.jsx)(t.li,{children:"Some Background"}),"\n",(0,i.jsx)(t.li,{children:"A Programming Model"}),"\n",(0,i.jsx)(t.li,{children:"Entities for a Micro-Blogging Platform"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Durable Entities walkthrough featuring David Justo, Azure icons, and function flows.",src:n(29152).Z+"",width:"1600",height:"672"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-entities?tabs=csharp&WT.mc_id=javascript-99907-cxa",children:"Durable Entities"})," are a special type of Azure Function that allow you to implement stateful objects in a serverless environment. They make it easy to introduce stateful components to your app without needing to manually persist data to external storage, so you can focus on your business logic. We\u2019ll demonstrate their power with a real-life example in the last section."]}),"\n",(0,i.jsx)(t.h2,{id:"entities-101-some-background",children:"Entities 101: Some Background"}),"\n",(0,i.jsx)(t.p,{children:"Programming Durable Entities feels a lot like object-oriented programming, except that these \u201cobjects\u201d exist in a distributed system. Like objects, each Entity instance has a unique identifier, i.e. an entity ID that can be used to read and manipulate their internal state. Entities define a list of operations that constrain how their internal state is managed, like an object interface."}),"\n",(0,i.jsxs)(t.p,{children:["Some experienced readers may realize that Entities sound a lot like an implementation of the Actor Pattern. For a discussion of the relationship between Entities and Actors, please refer to ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-entities?tabs=csharp#comparison-with-virtual-actors",children:"this documentation"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Entities are a part of the Durable Functions Extension, an extension of Azure Functions that empowers programmers with stateful abstractions for serverless, such as Orchestrations (i.e. workflows)."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-overview?tabs=csharp",children:"Durable Functions"})," is available in most Azure Functions runtime environments: .NET, Node.js, Python, PowerShell, and Java (preview). For this article, we\u2019ll focus on the C# experience, but note that Entities are also available in Node.js and Python; their availability in other languages is underway."]}),"\n",(0,i.jsx)(t.h2,{id:"entities-102-the-programming-model",children:"Entities 102: The programming model"}),"\n",(0,i.jsx)(t.p,{children:"Imagine you want to implement a simple Entity that just counts things. Its interface allows you to get the current count, add to the current count, and to reset the count to zero."}),"\n",(0,i.jsx)(t.p,{children:"If you implement this in an object-oriented way, you\u2019d probably define a class (say \u201cCounter\u201d) with a method to get the current count (say \u201cCounter.Get\u201d), another to add to the count (say \u201cCounter.Add\u201d), and another to reset the count (say \u201cCounter.Reset\u201d). Well, the implementation of an Entity in C# is not that different from this sketch:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[JsonObject(MemberSerialization.OptIn)] \npublic class Counter \n{ \n    [JsonProperty("value")] \n    public int Value { get; set; } \n \n    public void Add(int amount)  \n    { \n        this.Value += amount; \n    } \n\n    public Task Reset()  \n    { \n        this.Value = 0; \n        return Task.CompletedTask; \n    } \n \n    public Task<int> Get()  \n    { \n        return Task.FromResult(this.Value); \n    } \n    [FunctionName(nameof(Counter))] \n    public static Task Run([EntityTrigger] IDurableEntityContext ctx) \n        => ctx.DispatchAsync<Counter>(); \n\n} \n'})}),"\n",(0,i.jsx)(t.p,{children:"We\u2019ve defined a class named Counter, with an internal count stored in the variable \u201cValue\u201d which is manipulated through the \u201cAdd\u201d and \u201cReset\u201d methods, and which can be read via \u201cGet\u201d."}),"\n",(0,i.jsxs)(t.p,{children:["The \u201cRun\u201d method is simply boilerplate required for the Azure Functions framework to interact with the object we\u2019ve defined \u2013 it\u2019s the method that the framework calls internally when it needs to load the Entity object. When ",(0,i.jsx)(t.code,{children:"DispatchAsync"})," is called, the Entity and its corresponded state (the last count in \u201cValue\u201d) is loaded from storage. Again, this is mostly just boilerplate: your Entity\u2019s business logic lies in the rest of the class."]}),"\n",(0,i.jsx)(t.p,{children:"Finally, the Json annotation on top of the class and the Value field tells the Durable Functions framework that the \u201cValue\u201d field is to be durably persisted as part of the durable state on each Entity invocation. If you were to annotate other class variables with JsonProperty, they would also become part of the managed state."}),"\n",(0,i.jsx)(t.h2,{id:"entities-for-a-micro-blogging-platform",children:"Entities for a micro-blogging platform"}),"\n",(0,i.jsx)(t.p,{children:"We\u2019ll try to implement a simple micro-blogging platform, a la Twitter. Let\u2019s call it \u201cChirper\u201d. In Chirper, users write chirps (i.e tweets), they can follow, and unfollow other users, and they can read the chirps of users they follow."}),"\n",(0,i.jsx)(t.h3,{id:"defining-entity",children:"Defining Entity"}),"\n",(0,i.jsx)(t.p,{children:"Just like in OOP, it\u2019s useful to begin by identifying what are the stateful agents of this scenario. In this case, users have state (who they follow and their chirps), and chirps have state in the form of their content. So, we could model these stateful agents as Entities!"}),"\n",(0,i.jsx)(t.p,{children:"Below is a potential way to implement a User for Chirper as an Entity:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"  [JsonObject(MemberSerialization = MemberSerialization.OptIn)] \n  public class User: IUser  \n  { \n      [JsonProperty] \n      public List<string> FollowedUsers { get; set; }  = new List<string>(); \n\n      public void Add(string user) \n      { \n          FollowedUsers.Add(user); \n      } \n\n      public void Remove(string user) \n      { \n          FollowedUsers.Remove(user); \n      } \n\n      public Task<List<string>> Get() \n      { \n          return Task.FromResult(FollowedUsers); \n      } \n      // note: removed boilerplate \u201cRun\u201d method, for conciseness. \n  } \n"})}),"\n",(0,i.jsx)(t.p,{children:"In this case, our Entity\u2019s internal state is stored in \u201cFollowedUsers\u201d which is an array of accounts followed by this user. The operations exposed by this entity allow clients to read and modify this data: it can be read by \u201cGet\u201d, a new follower can be added via \u201cAdd\u201d, and a user can be unfollowed via \u201cRemove\u201d."}),"\n",(0,i.jsx)(t.p,{children:"With that, we\u2019ve modeled a Chirper\u2019s user as an Entity! Recall that Entity instances each has a unique ID, so we can consider that unique ID to correspond to a specific user account."}),"\n",(0,i.jsx)(t.p,{children:"What about chirps? Should we represent them as Entities as well? That would certainly be valid. However, we would then need to create a mapping between an entity ID and every chirp entity ID that this user wrote."}),"\n",(0,i.jsx)(t.p,{children:"For demonstration purposes, a simpler approach would be to create an Entity that stores the list of all chirps authored by a given user; call it UserChirps. Then, we could fix each User Entity to share the same entity ID as its corresponding UserChirps Entity, making client operations easier."}),"\n",(0,i.jsx)(t.p,{children:"Below is a simple implementation of UserChirps:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"  [JsonObject(MemberSerialization = MemberSerialization.OptIn)] \n  public class UserChirps : IUserChirps \n  { \n      [JsonProperty] \n      public List<Chirp> Chirps { get; set; } = new List<Chirp>(); \n\n      public void Add(Chirp chirp) \n      { \n          Chirps.Add(chirp); \n      } \n\n      public void Remove(DateTime timestamp) \n      { \n          Chirps.RemoveAll(chirp => chirp.Timestamp == timestamp); \n      } \n\n      public Task<List<Chirp>> Get() \n      { \n          return Task.FromResult(Chirps); \n      } \n\n      // Omitted boilerplate \u201cRun\u201d function \n  } \n"})}),"\n",(0,i.jsx)(t.p,{children:"Here, our state is stored in Chirps, a list of user posts. Our operations are the same as before: Get, Read, and Add. It\u2019s the same pattern as before, but we\u2019re representing different data."}),"\n",(0,i.jsx)(t.p,{children:"To put it all together, let\u2019s set up Entity clients to generate and manipulate these Entities according to some REST API."}),"\n",(0,i.jsx)(t.h3,{id:"interacting-with-entity",children:"Interacting with Entity"}),"\n",(0,i.jsxs)(t.p,{children:["Before going there, let\u2019s talk briefly about how you can interact with an Entity. Entity interactions take one of two forms -- ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-entities?tabs=csharp#access-entities",children:"calls and signals"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"Calling an entity is a two-way communication. You send an operation message to the entity and then wait for the response message before you continue. The response can be a result value or an error.\nSignaling an entity is a one-way (fire-and-forget) communication. You send an operation message but don\u2019t wait for a response. You have the reassurance that the message will be delivered eventually, but you don\u2019t know when and don\u2019t know what the response is.\nFor example, when you read the state of an Entity, you are performing a \u201ccall\u201d interaction. When you record that a user has followed another, you may choose to simply signal it."}),"\n",(0,i.jsx)(t.p,{children:"Now say user with a given userId (say \u201cdurableFan99\u201d ) wants to post a chirp. For this, you can write an HTTP endpoint to signal the UserChips entity to record that chirp. We can leverage the HTTP Trigger functionality from Azure Functions and pair it with an entity client binding that signals the Add operation of our Chirp Entity:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[FunctionName("UserChirpsPost")] \npublic static async Task<HttpResponseMessage> UserChirpsPost( \n    [HttpTrigger(AuthorizationLevel.Function, "post", Route = "user/{userId}/chirps")] \n    HttpRequestMessage req, \n    DurableClient] IDurableClient client, \n    ILogger log,  \n    string userId) \n    { \n        Authenticate(req, userId); \n        var chirp = new Chirp() \n        { \n            UserId = userId, \n            Timestamp = DateTime.UtcNow, \n            Content = await req.Content.ReadAsStringAsync(), \n        }; \n        await client.SignalEntityAsync<IUserChirps>(userId, x => x.Add(chirp)); \n        return req.CreateResponse(HttpStatusCode.Accepted, chirp); \n    } \n'})}),"\n",(0,i.jsxs)(t.p,{children:["Following the same pattern as above, to get all the chirps from a user, you could read the status of your Entity via ",(0,i.jsx)(t.code,{children:"ReadEntityStateAsync"}),", which follows the call-interaction pattern as your client expects a response:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[FunctionName("UserChirpsGet")] \npublic static async Task<HttpResponseMessage> UserChirpsGet( \n  [HttpTrigger(AuthorizationLevel.Function, "get", Route = "user/{userId}/chirps")] HttpRequestMessage req, \n  [DurableClient] IDurableClient client, \n  ILogger log, \n  string userId) \n  { \n\n      Authenticate(req, userId); \n      var target = new EntityId(nameof(UserChirps), userId); \n      var chirps = await client.ReadEntityStateAsync<UserChirps>(target); \n      return chirps.EntityExists \n            ? req.CreateResponse(HttpStatusCode.OK, chirps.EntityState.Chirps) \n            : req.CreateResponse(HttpStatusCode.NotFound); \n  } \n'})}),"\n",(0,i.jsxs)(t.p,{children:["And there you have it! To play with a complete implementation of Chirper, you can try out our sample in the ",(0,i.jsx)(t.a,{href:"https://github.com/Azure/azure-functions-durable-extension/tree/dev/samples/entitites-csharp/Chirper",children:"Durable Functions extension repo"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Thank you!"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Thanks for following along, and we hope you find Entities as useful as we do! If you have questions or feedback, please file issues in the repo above or tag us ",(0,i.jsx)(t.a,{href:"https://twitter.com/AzureFunctions",children:"@AzureFunctions"})," on Twitter"]})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},91871:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/zero-to-hero-david-2236e6d82fe0064fef5a652807264fd7.png"},29152:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/zero-to-hero-david-2236e6d82fe0064fef5a652807264fd7.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);