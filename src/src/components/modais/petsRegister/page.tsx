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

export default function PetsRegister() {
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      species: form.get("species"),
      age: form.get("age"),
      description: form.get("description"),
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
            <DialogTitle>Cadastrar o animal de estimação</DialogTitle>
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
              <DialogTitle>Espécie</DialogTitle>
              <input
                className={styles.input}
                type="text"
                name="species"
                placeholder="Espécie"
                required
              />
            </div>
            <div className="grid gap-3">
              <DialogTitle>Idade</DialogTitle>
              <input
                className={styles.input}
                type="text"
                name="age"
                placeholder="Idade"
                required
              />
            </div>
            <div className="grid gap-3">
              <DialogTitle>Descrição</DialogTitle>
              <input
                className={styles.input}
                type="text"
                name="description"
                placeholder="descrição"
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
