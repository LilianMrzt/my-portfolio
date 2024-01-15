import { type MouseEvent } from 'react'
import './animations.css'

/**
 * Permet de créer une animation de ripple
 * @param event
 * @param fromCenter
 */
export const createRipple = (
    event: MouseEvent<HTMLButtonElement>,
    fromCenter: boolean = false
): void => {
    const button = event.currentTarget

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`

    if (fromCenter) {
        circle.style.left = `${button.clientWidth / 2 - radius}px`
        circle.style.top = `${button.clientHeight / 2 - radius}px`
    } else {
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    }

    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
        ripple.remove()
    }

    button.appendChild(circle)
}
