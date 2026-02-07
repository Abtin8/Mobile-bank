export class Modal {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.style.display = 'none';
        this.modal.style.position = 'fixed';
        this.modal.style.top = '50%';
        this.modal.style.left = '50%';
        this.modal.style.transform = 'translate(-50%, -50%)';
        this.modal.style.background = '#fff';
        this.modal.style.padding = '20px';
        this.modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        this.modal.style.zIndex = 1000;

        this.messageEl = document.createElement('p');
        this.modal.appendChild(this.messageEl);

        const btn = document.createElement('button');
        btn.textContent = 'بستن';
        btn.addEventListener('click', () => this.hide());
        this.modal.appendChild(btn);

        document.body.appendChild(this.modal);
    }

    show(message) {
        this.messageEl.textContent = message;
        this.modal.style.display = 'block';
    }

    hide() {
        this.modal.style.display = 'none';
    }
}