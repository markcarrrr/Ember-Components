import Component from '@ember/component';

export default Component.extend({
    itemsClass: 'tab-item',
    activeClass: 'tab-active',

    restTabs(tabs) {
        tabs.forEach(item => {
            item.classList.remove(this.get('activeClass'));
        });
    },

    actions: {
        setTab(event) {
            event.preventDefault();

            const elementItem = event.target.parentNode;
            const allItems = elementItem.parentNode.querySelectorAll('.' + this.get('itemsClass'));

            this.restTabs(allItems);

            elementItem.classList.add(this.get('activeClass'));
        }
    }
});
