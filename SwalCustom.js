function showConfirmationModal(onConfirm, title = 'Estas seguro?', text ="Esta acción no se puede deshacer.", confirmButtonText ='Sí, dale pa allá!', cancelButtonText ='No, ta bien, dejalo así.') {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText
  }).then(function (result) {
    if (result.value) {
      onConfirm();
    }
  });
}