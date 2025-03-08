// Seleciona todas as divs de projetos
const projectContainers = document.querySelectorAll('.img-projeto');

projectContainers.forEach(container => {
  const image = container.querySelector('.project-image'); // Imagem dentro do container

  // Ao passar o mouse
  container.addEventListener('mouseenter', () => {
    const imageHeight = image.offsetHeight; // Altura real da imagem
    const containerHeight = container.offsetHeight; // Altura do container

    // Apenas faz o scroll se a imagem for maior que o container
    if (imageHeight > containerHeight) {
      const translateAmount = containerHeight - imageHeight; // Calcula o quanto precisa mover
      container.style.transform = 'scale(1.1)'; // Dá zoom no container
      image.style.transition = 'transform 2s ease'; // Transição suave
      image.style.transform = `translateY(${translateAmount}px)`; // Move até o limite da imagem
    }
  });

  // Ao remover o mouse
  container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)'; // Retorna ao tamanho normal
    image.style.transition = 'transform 0.3s ease'; // Transição suave de volta
    image.style.transform = 'translateY(0)'; // Retorna à posição inicial
  });
});