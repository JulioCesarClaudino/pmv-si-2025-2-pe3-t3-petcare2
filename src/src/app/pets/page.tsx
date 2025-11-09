"use client";
import { Header } from "@/components/header/page";
import styles from "./page.module.css";
// import PetsRegister from "@/components/modais/petsRegister/page";
import PetsRegister from "@/components/modais/petsRegister/page";

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Meus animais</h1>
          <PetsRegister />
        </div>

        <div className={styles.containerBox}>
          <div className={styles.box}>
            <img
              className={styles.img}
              src="/img/pet1.jpg"
              alt="Sem imagem"
              width={200}
              height={200}
            />
            <div className={styles.content}>
              <p>Nome: Diogo</p>
              <p>Raça: Buldogue</p>
              <p>Espécie: Cachorro</p>
              <p>Idade: 6</p>
              <p>
                Descrição: Ele ama outros cachorros e humanos. Seu método de
                aproximação é submisso e amigável: ele se abaixa e balança a
                cauda vigorosamente, convidando-os para brincar. Raramente é
                territorialista ou agressivo.
              </p>
              <button className={styles.button}>Editar</button>
            </div>
          </div>

          <div className={styles.box}>
            <img
              className={styles.img}
              src="/img/pet2.jpg"
              alt="Sem imagem"
              width={200}
              height={200}
            />
            <div className={styles.content}>
              <p>Nome: Gudan</p>
              <p>Raça: Husky siberiano</p>
              <p>Espécie: Cachorro</p>
              <p>Idade: 5</p>
              <p>
                Descrição: Ele é obcecado por buscar bolinhas. Ele não se cansa,
                e o comportamento dele é de foco total.
              </p>
              <button className={styles.button}>Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
