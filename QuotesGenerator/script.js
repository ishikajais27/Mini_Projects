let btn = document.getElementsByClassName('generate-btn')[0]

function generateQuotes(value) {
  document.getElementsByClassName('quote')[0].textContent = value
}

async function fetchQuotes() {
  try {
    const response = await fetch('https://zenquotes.io/api/random ')

    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data = await response.json()

    generateQuotes(data.content)
    console.log(data.content)
  } catch (error) {
    console.error('Error:', error.message)
    document.getElementsByClassName('quote')[0].textContent =
      'Failed to fetch quote. Please try again.'
  }
}
btn.addEventListener('click', fetchQuotes)
