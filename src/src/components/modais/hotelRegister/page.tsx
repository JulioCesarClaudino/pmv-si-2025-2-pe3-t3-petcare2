import { IoMdAdd } from "react-icons/io";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./page.module.css";

export default function HotelRegister() {
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      address: form.get("address"),
      capacity: form.get("capacity"),
    };

    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={styles.button}>
          <IoMdAdd size="15" />
        </button>
      </DialogTrigger>
      <DialogContent className={styles.container}>
        <form onSubmit={handleLogin}>
          <DialogHeader className={styles.title}>
            <DialogTitle>Cadastro de hotel</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <DialogTitle>Name</DialogTitle>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Nome"
                required
              />
            </div>
            <div className="grid gap-3">
              <DialogTitle>Endereço</DialogTitle>
              <input
                className={styles.input}
                type="text"
                name="address"
                placeholder="endereço"
                required
              />
            </div>
            <div className="grid gap-3">
              <DialogTitle>Capacidade</DialogTitle>
              <input
                className={styles.input}
                type="text"
                name="capacity"
                placeholder="Capacidade"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button>Cancel</button>
            </DialogClose>
            <button type="submit">Salvar</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
