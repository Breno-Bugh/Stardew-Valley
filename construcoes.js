document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // CONFIGURAÇÕES DO LOCALSTORAGE
    // ==========================================

    const TAB_STORAGE_KEY = 'stardew_construction_tab';
    const FILTER_STORAGE_KEY = 'stardew_construction_filter';


    // ==========================================
    // TROCA DE ABAS
    // ==========================================

    window.switchConstructionTab = function (tabId, save = true) {

        const sections = document.querySelectorAll(
            '.construction-section'
        );

        const buttons = document.querySelectorAll(
            '.wiki-nav .tab-btn'
        );


        // Remove o estado ativo de todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });


        // Remove o estado ativo de todos os botões
        buttons.forEach(button => {
            button.classList.remove('active');
        });


        // Ativa a seção selecionada
        const targetSection = document.getElementById(tabId);

        if (!targetSection) {
            return;
        }

        targetSection.classList.add('active');


        // Ativa o botão correspondente
        const targetButton = document.querySelector(
            `.wiki-nav .tab-btn[data-tab="${tabId}"]`
        );

        if (targetButton) {
            targetButton.classList.add('active');
        }


        // Salva a aba escolhida
        if (save) {
            localStorage.setItem(
                TAB_STORAGE_KEY,
                tabId
            );
        }


        // Recupera o filtro atual
        const currentFilter =
            localStorage.getItem(FILTER_STORAGE_KEY) || 'all';


        // Reaplica o filtro na nova aba
        window.filterConstructionContent(
            currentFilter,
            false
        );
    };


    // ==========================================
    // FILTRO DAS CONSTRUÇÕES
    // ==========================================

    window.filterConstructionContent = function (
        filterType,
        save = true
    ) {

        const filterButtons = document.querySelectorAll(
            '.content-filter-bar .filter-btn'
        );


        // Remove ativo dos filtros
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });


        // Ativa o filtro selecionado
        const activeFilterButton = document.querySelector(
            `.content-filter-bar .filter-btn[data-filter="${filterType}"]`
        );

        if (activeFilterButton) {
            activeFilterButton.classList.add('active');
        }


        // Salva o filtro
        if (save) {
            localStorage.setItem(
                FILTER_STORAGE_KEY,
                filterType
            );
        }


        // Localiza a aba atualmente ativa
        const activeSection = document.querySelector(
            '.construction-section.active'
        );

        if (!activeSection) {
            return;
        }


        // Localiza todos os blocos daquela aba
        const blocks = activeSection.querySelectorAll(
            '.construction-block'
        );


        // ==========================================
        // ABA CASA
        // ==========================================

        if (activeSection.id === 'casa') {

            blocks.forEach(block => {

                if (filterType === 'all') {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }

            });

            return;
        }


        // ==========================================
        // ABA FAZENDA
        // ==========================================

        blocks.forEach(block => {

            // Mostrar tudo
            if (filterType === 'all') {

                block.style.display = 'block';

                return;
            }


            // Animais
            if (
                filterType === 'animals' &&
                block.classList.contains('animals-block')
            ) {

                block.style.display = 'block';

                return;
            }


            // Produção
            if (
                filterType === 'production' &&
                block.classList.contains('production-block')
            ) {

                block.style.display = 'block';

                return;
            }


            // Armazenamento
            if (
                filterType === 'storage' &&
                block.classList.contains('storage-block')
            ) {

                block.style.display = 'block';

                return;
            }


            // Utilidades
            if (
                filterType === 'utility' &&
                block.classList.contains('utility-block')
            ) {

                block.style.display = 'block';

                return;
            }


            // Caso não corresponda ao filtro
            block.style.display = 'none';

        });

    };


    // ==========================================
    // RESTAURAÇÃO DA PÁGINA
    // ==========================================

    const savedTab = localStorage.getItem(
        TAB_STORAGE_KEY
    );

    const savedFilter = localStorage.getItem(
        FILTER_STORAGE_KEY
    );


    // ==========================================
    // RESTAURA ABA
    // ==========================================

    if (
        savedTab &&
        document.getElementById(savedTab)
    ) {

        window.switchConstructionTab(
            savedTab,
            false
        );

    } else {

        // Caso não exista aba salva,
        // seleciona a primeira aba disponível.

        const firstTabButton = document.querySelector(
            '.wiki-nav .tab-btn'
        );

        if (firstTabButton) {

            const firstTab = firstTabButton.getAttribute(
                'data-tab'
            );

            window.switchConstructionTab(
                firstTab,
                false
            );
        }
    }


    // ==========================================
    // RESTAURA FILTRO
    // ==========================================

    if (savedFilter) {

        window.filterConstructionContent(
            savedFilter,
            false
        );

    } else {

        window.filterConstructionContent(
            'all',
            false
        );
    }

});
