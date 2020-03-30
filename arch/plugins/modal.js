function _createModal(options) {
  const modal = document.createElement(tagName: 'div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML(where: 'afterbegin', html: `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal title</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div class="modal-footer">
            <button type="button" name="button">Ok</button>
            <button type="button" name="button">Cancel</button>
          </div>
        </div>
      </div>
  `)
  return modal
}
tagName:
$.modal = function(options) {
  const $modal = _createModal(options)

  return {
    open() {},
    close() {},
    destroy() {}
  }
}
