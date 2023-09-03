import React from 'react'

const Animationtext = () => {
    return (
        <div class="container animation">
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="50%">Contect-Book</text>
                </symbol>

                <g class="g-ants">
                    <use href="#s-text" class="text-copy"></use>
                    <use href="#s-text" class="text-copy"></use>
                    <use href="#s-text" class="text-copy"></use>
                    <use href="#s-text" class="text-copy"></use>
                    <use href="#s-text" class="text-copy"></use>
                </g>
            </svg>
        </div>
    )
}

export default Animationtext