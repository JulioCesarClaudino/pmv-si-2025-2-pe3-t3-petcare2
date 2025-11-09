"use client";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { Header } from "@/components/header/page";
import { IoMdAdd } from "react-icons/io";
import styles from "./page.module.css";
import HotelRegister from "@/components/modais/hotelRegister/page";

export default function HomePage() {
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <div className="page">
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Registro de hotéis</h1>
          <HotelRegister />
        </div>

        <div className={styles.containerBox}>
          <div className={styles.box}>
            <img
              className={styles.img}
              src="/img/banner1.png"
              alt="Sem imagem"
              width={200}
              height={200}
            />
            <div className={styles.content}>
              <h1>Hotel Belo</h1>
              <p>
                Monitoramento 24h por equipe treinada e veterinário de plantão.
                Ambiente 100% pet-friendly com cercas e portões de segurança
                dupla.
              </p>
              <button className={styles.button}>Editar</button>
            </div>
          </div>

          <div className={styles.box}>
            <img
              className={styles.img}
              src="/img/banner2.jpeg"
              alt="Sem imagem"
              width={200}
              height={200}
            />
            <div className={styles.content}>
              <h1>Hotel Varginha</h1>
              <p>
                Quartos individuais e climatizados (ou confortáveis baias
                separadas), com limpeza e higienização diária rigorosa, evitando
                qualquer risco de contaminação.
              </p>
              <button className={styles.button}>Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
