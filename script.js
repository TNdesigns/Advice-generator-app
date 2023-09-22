document.addEventListener("DOMContentLoaded", function () {
    const advcNumbr = document.getElementById("advice");
    const advcTxt = document.getElementById("advice-text");
    const neonBtn = document.getElementById("neon");
    const url = "https://api.adviceslip.com/advice";
    
    async function getAdvice() {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const { slip: { id, advice } } = await res.json();
            advcNumbr.innerText = id;
            advcTxt.innerText = advice;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    getAdvice()
    neonBtn.addEventListener("click",getAdvice)
})