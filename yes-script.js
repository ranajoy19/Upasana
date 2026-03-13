let musicPlaying = false

window.addEventListener('load', () => {
    launchConfetti()

    // Autoplay music (works since user clicked Yes to get here)
    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'

    // Show the chosen plan
    const chosenPlan = localStorage.getItem('selectedPlan')
    const chosenCaption = localStorage.getItem('selectedCaption')
    const planEl = document.getElementById('chosen-plan')
    const captionEl = document.getElementById('plan-caption')

    if (chosenPlan && planEl) {
        planEl.textContent = `Plan chosen: ${chosenPlan} — can’t wait to make it happen! ✨`
    }
    if (chosenCaption && captionEl) {
        captionEl.textContent = `Perfect! ${chosenCaption} For you, Debanjali 💖`
    }
})

function launchConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00']
    const duration = 6000
    const end = Date.now() + duration

    // Initial big burst
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    })

    // Continuous side cannons
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        })

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        })
    }, 300)
}

function selectPlan(plan) {
    const message = document.getElementById('plan-selection')
    message.textContent = `Perfect! ${plan} it is — can’t wait to spend time with you, Debanjali 💖`

    document.querySelectorAll('.plan-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === plan)
    })
}

function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}
