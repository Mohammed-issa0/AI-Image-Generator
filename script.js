let api = "sk-None-YO4Iwe25Wcd1rwRLgmABT3BlbkFJ7O5njqpr0CylTuogmA8I";
let inp = document.querySelector(".inp");
let images = document.querySelector(".images");
let btn = document.querySelector(".btn");

btn.onclick = async () => {
    // make a request to OpenAI API
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256" // تأكد من أن الصيغة صحيحة
        })
    };

        console.log("Request methods:", methods); // تحقق من تفاصيل الطلب
    
        const res = await fetch("https://api.openai.com/v1/images/generations", methods);

        // parse the response as json
        const data = await res.json();
        console.log("API response:", data); // تأكد من الاستجابة

        const listImages = data.data;
        console.log("List of images:", listImages); // تحقق من أن listImages تحتوي على المصفوفة

        images.innerHTML = '';

        listImages.forEach(photo => { // استخدام forEach بدلاً من map
            console.log("Processing photo:", photo); // تحقق من البيانات في كل تكرار
            const div = document.createElement("div");
            images.appendChild(div);
            const img = document.createElement("img");
            div.appendChild(img);
            img.src = photo.url;
        });
};
