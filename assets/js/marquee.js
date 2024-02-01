document.addEventListener('DOMContentLoaded', () => {
    
    let marquee = (selector, speed) => {
        
        const container = document.querySelector(selector)
        const list = container.children[0]

        let move = 0

        setInterval(() => {
            list.style.marginLeft = `-${move}px`

            if(move > list.clientWidth) {
                move = 0
            } 

            move = move + speed

        }, 0)

    }

    marquee('.marquee__container', 0.2)

})