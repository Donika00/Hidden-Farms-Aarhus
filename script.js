
//Changing translation flag dynamically

const select = document.getElementById('country-select');

select.addEventListener('change', () => {
  const selectedOption = select.options[select.selectedIndex];
  const flagUrl = selectedOption.getAttribute('data-flag');
  
  // Update the background image of the dropdown
  select.style.backgroundImage = `url('${flagUrl}'), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none" stroke="black" stroke-width="1.5"><path d="M1 2 L5 5 L9 2" /></svg>')`;
});

