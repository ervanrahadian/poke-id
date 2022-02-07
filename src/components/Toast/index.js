import Swal from "sweetalert2";

const Toast = (props) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    showCloseButton: true,
    timer: 5000,
  });

  return Toast.fire({
    icon: props.icon,
    title: props.title,
  });
};

export default Toast;
