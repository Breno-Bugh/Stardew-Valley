// Alterna entre as abas de categorias do Centro Comunitário com salvamento no localStorage
function switchCategory(catId, save = true) {
    const sections = document.querySelectorAll('.category-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const buttons = document.querySelectorAll('.wiki-nav .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetSection = document.getElementById(catId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const targetBtn = document.querySelector(`.wiki-nav .tab-btn[data-cat="${catId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    if (save) {
        localStorage.setItem('cc_active_category', catId);
    }
}

// Atualiza o status do conjunto (se todos ou a quantidade exigida foi marcada)
function updateBundleStatus(bundleId) {
    const bundleCard = document.getElementById(`bundle-${bundleId}`);
    if (!bundleCard) return;

    const checkboxes = bundleCard.querySelectorAll('input[type="checkbox"]');
    const statusSpan = bundleCard.querySelector('.bundle-status');

    // Salva o estado atual dos checkboxes no localStorage
    const states = {};
    checkboxes.forEach((cb, index) => {
        states[index] = cb.checked;
    });
    localStorage.setItem(`cc_bundle_${bundleId}`, JSON.stringify(states));

    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    const someChecked = Array.from(checkboxes).some(cb => cb.checked);

    if (allChecked) {
        bundleCard.classList.add('completed');
        statusSpan.textContent = 'Concluído! ✔️';
    } else if (someChecked) {
        bundleCard.classList.remove('completed');
        statusSpan.textContent = 'Em Progresso...';
    } else {
        bundleCard.classList.remove('completed');
        statusSpan.textContent = 'Pendente';
    }
}

// Inicialização ao carregar a página (restaura aba ativa e estados dos checkboxes salvos)
window.addEventListener('DOMContentLoaded', () => {
    // 1. Restaura categoria ativa
    const savedCat = localStorage.getItem('cc_active_category');
    if (savedCat) {
        switchCategory(savedCat, false);
    }

    // 2. Restaura checkboxes de todos os bundles cadastrados
    const bundleCards = document.querySelectorAll('.bundle-card');
    bundleCards.forEach(card => {
        const bundleId = card.id.replace('bundle-', '');
        const savedState = localStorage.getItem(`cc_bundle_${bundleId}`);
        if (savedState) {
            const states = JSON.parse(savedState);
            const checkboxes = card.querySelectorAll('input[type="checkbox"]');

            checkboxes.forEach((cb, index) => {
                if (states[index] !== undefined) {
                    cb.checked = states[index];
                }
            });
            updateBundleStatus(bundleId);
        }
    });
});