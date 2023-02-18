




   var form_check=document.querySelector('.search')
   form_check.addEventListener('submit',(e)=>{
        e.preventDefault()
    
        var search=document.querySelector('#inp')
        var search_value=search.value
        api(search_value)
    })


    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]

async function api(value){ 
    url=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&key=AIzaSyB83sAkcZ69-acqXiUlsaS89QCccz-s8gc`

   
    v=fetch(url)

    out1=await v

    prom1=out1.json()
    

    result1=await prom1

    // console.log(result1)

   

    prom2=result1.items

    result2=await prom2

    for(i of result2){
       
        
        prom3=i.snippet.title
        
        result3=await prom3
        prom4=i.snippet.thumbnails.high.url
        result4=await prom4

       

        a=document.querySelector(".snipp")

        
        image=document.createElement("img")
        text=document.createElement("p")
        
        image.src=prom4

        image.setAttribute("vid","result4")
        text.innerText=prom3
        
       
        let div=document.createElement("div")
        // div.setAttribute("vid",i.id.videoId)
        // console.log(div.vid)
        div.addEventListener("click",()=>{

            window.open(`https://www.youtube.com/watch?v=${i.id.videoId}`,"_self")
        })
        div.append(image, text)
        

        a.appendChild(div)
        
        



        
        console.log(result3)
        console.log(result4)
    }
 
    
   
   

}

