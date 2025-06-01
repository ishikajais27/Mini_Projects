let btn = document.getElementsByClassName('generate-btn')[0]

function generateQuotes(value) {
  document.getElementsByClassName('quote')[0].textContent = value
}

async function fetchQuotes() {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'HrmtoltcdFhIf+hu6YXzVA==vsCRgviK8a31z4qu', // Replace with your actual API key
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch quotes: ${response.status}`)
    }

    const data = await response.json()

    if (data.length > 0) {
      generateQuotes(data[0].quote)
      console.log(data[0].quote)
    } else {
      throw new Error('No quotes found')
    }
  } catch (error) {
    console.error('Error:', error.message)
    document.getElementsByClassName('quote')[0].textContent =
      'Failed to fetch quote. Please try again.'
  }
}

btn.addEventListener('click', fetchQuotes)
