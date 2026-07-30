document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'active' de todos os links do menu
        document.querySelectorAll('.nav-links a').forEach(item => item.classList.remove('active'));
        
        // Adiciona a classe 'active' apenas no link que foi clicado
        this.classList.add('active');
    });
});