const accordionBtn = document.querySelectorAll('button');

function showAccordionText(button) {
	const isAriaExpanded = button.getAttribute('aria-expanded');
	const id = button.getAttribute('aria-controls');
	const toggleAriaExpanded = isAriaExpanded === 'true' ? 'false' : 'true';
	button.setAttribute('aria-expanded', toggleAriaExpanded);

	const text = document.getElementById(id);
	const arrow = button.getElementsByTagName('img')[0];

	if (toggleAriaExpanded === 'true') {
		text.classList.add('accordion__text--show');
		button.classList.add('accordion__title--active');
		arrow.classList.remove('arrow--hide');
		arrow.classList.add('arrow--show');
	} else {
		text.classList.remove('accordion__text--show');
		button.classList.remove('accordion__title--active');
		arrow.classList.remove('arrow--show');
		arrow.classList.add('arrow--hide');
	}
}

accordionBtn.forEach((item) => {
	item.addEventListener('click', () => showAccordionText(item));
});
