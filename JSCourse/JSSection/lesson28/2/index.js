import { initCouner } from './counter.js';

const onDocumentLoaded = () => {
    initCouner();
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
