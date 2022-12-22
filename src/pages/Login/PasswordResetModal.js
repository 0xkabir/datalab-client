import {Label, Modal } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PasswordResetModal = ({ showModal, setShowModal }) => {
    const {resetPassword} = useContext(AuthContext)
    const sendResetEmail = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        resetPassword(email)
        .then(()=>{
            toast.success('Password reset email sent')
            setShowModal(false)
        })
        .catch(error => toast.error(error.message.slice(22, -2)))
    }

  return (
    <Modal
      show={showModal}
      size="md"
      popup={true}
      onClose={() => setShowModal(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div>
          <form className="flex flex-col gap-4" onSubmit={sendResetEmail}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email address" />
              </div>
              <input
                id="email"
                type="email"
                className="w-full rounded focus:border-slate-700 focus:ring-slate-700"
                placeholder="name@example.com"
                required={true}
              />
            </div>
          <div className="flex justify-center gap-4">
            <button className="px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-200" onClick={()=>setShowModal(false)}>Cancel</button>
            <button className="px-3 py-1.5 rounded text-white bg-slate-700 hover:bg-slate-900" type="submit">Send Email</button>
          </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PasswordResetModal;
