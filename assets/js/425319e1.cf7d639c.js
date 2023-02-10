"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63323],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={slug:"fundamentals-day-4",title:"2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","storage"],image:"https://azure.github.io/Cloud-Native/img/og/30-09.png",description:"A Step-by-Step Guide using Kubernetes Persistent Volumes, Persistent Volume Claims, and Storage Classes",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","persistent-volumes","persistent-volume-claims"]},s=void 0,l={permalink:"/Cloud-Native/cnny-2023/fundamentals-day-4",source:"@site/blog-cnny/2023-02-02/index.md",title:"2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims",description:"A Step-by-Step Guide using Kubernetes Persistent Volumes, Persistent Volume Claims, and Storage Classes",date:"2023-02-02T00:00:00.000Z",formattedDate:"February 2, 2023",tags:[{label:"cloud-native-new-year",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native-new-year"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"aks",permalink:"/Cloud-Native/cnny-2023/tags/aks"},{label:"kubernetes",permalink:"/Cloud-Native/cnny-2023/tags/kubernetes"},{label:"persistent-volumes",permalink:"/Cloud-Native/cnny-2023/tags/persistent-volumes"},{label:"persistent-volume-claims",permalink:"/Cloud-Native/cnny-2023/tags/persistent-volume-claims"}],readingTime:7.915,hasTruncateMarker:!1,authors:[{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"}],frontMatter:{slug:"fundamentals-day-4",title:"2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloudnative","azure","kubernetes","storage"],image:"https://azure.github.io/Cloud-Native/img/og/30-09.png",description:"A Step-by-Step Guide using Kubernetes Persistent Volumes, Persistent Volume Claims, and Storage Classes",tags:["cloud-native-new-year","azure-kubernetes-service","aks","kubernetes","persistent-volumes","persistent-volume-claims"]},prevItem:{title:"2-5. Kubernetes Fundamentals - Scaling Pods and Nodes",permalink:"/Cloud-Native/cnny-2023/fundamentals-day-5"},nextItem:{title:"2-3. Kubernetes Fundamentals - ConfigMaps and Secrets",permalink:"/Cloud-Native/cnny-2023/fundamentals-day-3"}},i={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Containers are ephemeral",id:"containers-are-ephemeral",level:2},{value:"Persistent storage on Kubernetes",id:"persistent-storage-on-kubernetes",level:2},{value:"Persistent storage on AKS",id:"persistent-storage-on-aks",level:2},{value:"Takeaways",id:"takeaways",level:2},{value:"Resources",id:"resources",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-4"}),(0,r.kt)("meta",{name:"twitter:title",content:"2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims"}),(0,r.kt)("meta",{name:"twitter:description",content:"A Step-by-Step Guide using Kubernetes Persistent Volumes, Persistent Volume Claims, and Storage Classes"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-09.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@pauldotyu"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-4"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 4 of Week 2")," of #CloudNativeNewYear!"),(0,r.kt)("p",null,"The theme for this week is Kubernetes fundamentals. Yesterday we talked about how to set app configurations and secrets at runtime using Kubernetes ConfigMaps and Secrets. Today we'll explore the topic of persistent storage on Kubernetes and show you can leverage Persistent Volumes and Persistent Volume Claims to ensure your PostgreSQL data can survive container restarts."),(0,r.kt)("admonition",{title:"Ask the Experts Thursday, February 9th at 9 AM PST",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/ate"},"Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!"))),(0,r.kt)("admonition",{title:"Catch the Replay of the Live Demo",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Join us for a live demo and let us answer your questions."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/cnny/week2-demo"},"We were live on YouTube walking through today's (and the rest of this week's) demos"),".  ")),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Containers are ephemeral"),(0,r.kt)("li",{parentName:"ul"},"Persistent storage on Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Persistent storage on AKS"),(0,r.kt)("li",{parentName:"ul"},"Takeaways"),(0,r.kt)("li",{parentName:"ul"},"Resources")),(0,r.kt)("h2",{id:"containers-are-ephemeral"},"Containers are ephemeral"),(0,r.kt)("p",null,"In our sample application, the frontend UI writes vote values to a backend PostgreSQL database. By default the database container stores its data on the container's local file system, so there will be data loss when the pod is re-deployed or crashes as containers are meant to start with a clean slate each time."),(0,r.kt)("p",null,"Let's re-deploy our sample app and experience the problem first hand."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd NOTE: If you don't have an AKS cluster deployed, please head over to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-voting-app-rust/tree/week2/day3"},"Azure-Samples/azure-voting-app-rust"),", clone the repo, and follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-voting-app-rust/blob/main/README.md"},"README.md")," to execute the Azure deployment and setup your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," context. Check out ",(0,r.kt)("a",{parentName:"p",href:"/Cloud-Native/cnny-2023/fundamentals-day-1#setting-up-a-kubernetes-environment-in-azure"},"the first post this week for more on the environment setup"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./manifests\n")),(0,r.kt)("p",null,"Wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-voting-app")," service to be assigned a public IP then browse to the website and submit some votes. Use the command below to print the URL to the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"http://$(kubectl get ingress azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\"\n")),(0,r.kt)("p",null,"Now, let's delete the pods and watch Kubernetes do what it does best... that is, re-schedule pods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# wait for the pod to come up then ctrl+c to stop watching\nkubectl delete --all pod --wait=false && kubectl get po -w\n")),(0,r.kt)("p",null,"Once the pods have been recovered, reload the website and confirm the vote tally has been reset to zero."),(0,r.kt)("p",null,"We need to fix this so that the data outlives the container."),(0,r.kt)("h2",{id:"persistent-storage-on-kubernetes"},"Persistent storage on Kubernetes"),(0,r.kt)("p",null,"In order for application data to survive crashes and restarts, you must implement ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volumes and Persistent Volume Claims"),"."),(0,r.kt)("p",null,"A persistent volume represents storage that is available to the cluster. Storage volumes can be provisioned manually by an administrator or dynamically using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#csi"},"Container Storage Interface (CSI)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"storage classes"),", which includes information on how to provision CSI volumes."),(0,r.kt)("p",null,'When a user needs to add persistent storage to their application, a persistent volume claim is made to allocate chunks of storage from the volume. This "claim" includes things like volume mode (e.g., file system or block storage), the amount of storage to allocate, the ',(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"access mode"),", and optionally a storage class. Once a persistent volume claim has been deployed, users can add the volume to the pod and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes"},"mount it in a container"),"."),(0,r.kt)("p",null,"In the next section, we'll demonstrate how to enable persistent storage on AKS."),(0,r.kt)("h2",{id:"persistent-storage-on-aks"},"Persistent storage on AKS"),(0,r.kt)("p",null,"With AKS, ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/csi-storage-drivers?WT.mc_id=containers-84290-pauyu"},"CSI drivers")," and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/concepts-storage?WT.mc_id=containers-84290-pauyu#storage-classes"},"storage classes")," are pre-deployed into your cluster. This allows you to natively use ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/azure-disk-csi?WT.mc_id=containers-84290-pauyu"},"Azure Disks"),", ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/azure-files-csi?WT.mc_id=containers-84290-pauyu"},"Azure Files"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/azure-blob-csi?WT.mc_id=containers-84290-pauyu"},"Azure Blob Storage")," as persistent volumes. You can either bring your own Azure storage account and use it with AKS or have AKS provision an Azure storage account for you."),(0,r.kt)("p",null,"To view the Storage CSI drivers that have been enabled in your AKS cluster, run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az aks show \\\n  --name <YOUR_AKS_NAME> \\\n  --resource-group <YOUR_AKS_RESOURCE_GROUP> \\\n  --query storageProfile\n")),(0,r.kt)("p",null,"You should see output that looks like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blobCsiDriver": null,\n  "diskCsiDriver": {\n    "enabled": true,\n    "version": "v1"\n  },\n  "fileCsiDriver": {\n    "enabled": true\n  },\n  "snapshotController": {\n    "enabled": true\n  }\n}\n')),(0,r.kt)("p",null,"To view the storage classes that have been installed in your cluster, run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get storageclass\n")),(0,r.kt)("p",null,"Workload requirements will dictate which CSI driver and storage class you will need to use. "),(0,r.kt)("p",null,"If you need block storage, then you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"blobCsiDriver"),". The driver may not be enabled by default but you can enable it by following instructions which can be found in the ",(0,r.kt)("a",{parentName:"p",href:"#resources"},"Resources")," section below."),(0,r.kt)("p",null,"If you need file storage you should leverage either ",(0,r.kt)("inlineCode",{parentName:"p"},"diskCsiDriver")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fileCsiDriver"),". The decision between these two boils down to whether or not you need to have the underlying storage accessible by one pod or multiple pods. It is important to note that ",(0,r.kt)("inlineCode",{parentName:"p"},"diskCsiDriver")," currently supports access from a single pod only. Therefore, if you need data to be accessible by multiple pods at the same time, then you should opt for ",(0,r.kt)("inlineCode",{parentName:"p"},"fileCsiDriver"),"."),(0,r.kt)("p",null,"For our PostgreSQL deployment, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"diskCsiDriver")," and have AKS create an Azure Disk resource for us. There is no need to create a PV resource, all we need to do to is create a PVC using the ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-csi-premium")," storage class."),(0,r.kt)("p",null,"Run the following command to create the PVC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF            \napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-azuredisk\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: managed-csi-premium\nEOF\n")),(0,r.kt)("p",null,"When you check the PVC resource, you'll notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending"),". It will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Bound")," once the volume is mounted in the PostgreSQL container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get persistentvolumeclaim\n")),(0,r.kt)("p",null,"Let's delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-voting-db")," deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete deploy azure-voting-db\n")),(0,r.kt)("p",null,"Next, we need to apply an updated deployment manifest which includes our PVC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: azure-voting-db\n  name: azure-voting-db\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: azure-voting-db\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: azure-voting-db\n    spec:\n      containers:\n      - image: postgres:15.0-alpine\n        name: postgres\n        ports:\n        - containerPort: 5432\n        env:\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: azure-voting-secret\n              key: POSTGRES_PASSWORD\n        resources: {}\n        volumeMounts:\n        - name: mypvc\n          mountPath: "/var/lib/postgresql/data"\n          subPath: "data"\n      volumes:\n      - name: mypvc\n        persistentVolumeClaim:\n          claimName: pvc-azuredisk\nEOF\n')),(0,r.kt)("p",null,"In the manifest above, you'll see that we are mounting a new volume called ",(0,r.kt)("inlineCode",{parentName:"p"},"mypvc")," (the name can be whatever you want) in the pod which points to a PVC named ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc-azuredisk"),". With the volume in place, we can mount it in the container by referencing the name of the volume  ",(0,r.kt)("inlineCode",{parentName:"p"},"mypvc")," and setting the mount path to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/postgresql/data")," (which is the ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/storage-file-layout.html"},"default path"),")."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 IMPORTANT: When mounting a volume into a non-empty subdirectory, you must add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#using-subpath"},(0,r.kt)("inlineCode",{parentName:"a"},"subPath"))," to the volume mount and point it to a subdirectory in the volume rather than mounting at root. In our case, when Azure Disk is formatted, it leaves a ",(0,r.kt)("inlineCode",{parentName:"p"},"lost+found")," directory as documented ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/could-not-change-permissions-azure-files?WT.mc_id=containers-84290-pauyu"},"here"),".")),(0,r.kt)("p",null,"Watch the pods and wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," to show ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," and the pod's ",(0,r.kt)("inlineCode",{parentName:"p"},"READY")," status shows ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# wait for the pod to come up then ctrl+c to stop watching\nkubectl get po -w\n")),(0,r.kt)("p",null,"Verify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS")," of the PVC is now set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Bound")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get persistentvolumeclaim\n")),(0,r.kt)("p",null,"With the new database container running, let's restart the application pod, wait for the pod's ",(0,r.kt)("inlineCode",{parentName:"p"},"READY")," status to show ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1"),", then head back over to our web browser and submit a few votes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pod -lapp=azure-voting-app --wait=false && kubectl get po -lapp=azure-voting-app -w\n")),(0,r.kt)("p",null,"Now the moment of truth... let's rip out the pods again, wait for the pods to be re-scheduled, and confirm our vote counts remain in tact."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete --all pod --wait=false && kubectl get po -w\n")),(0,r.kt)("p",null,"If you navigate back to the website, you'll find the vote are still there \ud83c\udf89"),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("p",null,"By design, containers are meant to be ephemeral and stateless workloads are ideal on Kubernetes. However, there will come a time when your data needs to outlive the container. To persist data in your Kubernetes workloads, you need to leverage PV, PVC, and optionally storage classes. In our demo scenario, we leveraged CSI drivers built into AKS and created a PVC using pre-installed storage classes. From there, we updated the database deployment to mount the PVC in the container and AKS did the rest of the work in provisioning the underlying Azure Disk. If the built-in storage classes does not fit your needs; for example, you need to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReclaimPolicy")," or change the SKU for the Azure resource, then you can ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/azure-disk-csi#create-a-custom-storage-class?WT.mc_id=containers-84290-pauyu"},"create your own custom storage class")," and configure it just the way you need it \ud83d\ude0a"),(0,r.kt)("p",null,"We'll revisit this topic again next week but in the meantime, check out some of the resources listed below to learn more."),(0,r.kt)("p",null,"See you in the next post!"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("admonition",{title:"Take the Cloud Skills Challenge!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356"},"Enroll")," in the Cloud Skills Challenge! "),(0,r.kt)("p",{parentName:"admonition"},"Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"Kubernetes: Volumes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Kubernetes: Persistent Volumes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/"},"Container Storage Interface (CSI) for Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/csi-storage-drivers?WT.mc_id=containers-84290-pauyu"},"Container Storage Interface (CSI) drivers on Azure Kubernetes Service (AKS)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/azure-blob-csi?WT.mc_id=containers-84290-pauyu&tabs=NFS#enable-csi-driver-on-a-new-or-existing-aks-cluster"},"Enable CSI driver on a new or existing AKS cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-storage?WT.mc_id=containers-84290-pauyu#volumes"},"AKS: Volumes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/concepts-storage?WT.mc_id=containers-84290-pauyu#storage-classes"},"AKS: Storage Classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/aks/azure-disks-dynamic-pv?WT.mc_id=containers-84290-pauyu#built-in-storage-classes"},"AKS: Built-in Storage Classes"))))}c.isMDXComponent=!0}}]);