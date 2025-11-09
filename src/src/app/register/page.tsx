"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { UserRepo } from "@/utils/localstorage";
import Link from "next/link";
import styles from "./page.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("");

  const petOptions = [
    { value: "guardian", label: "Tutor" },
    { value: "hotel", label: "Hotel" },
  ];

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, []);

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      role: selectedRole,
      password: form.get("password"),
    };

    UserRepo.create(data);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h1 className={styles.title}>Cadastro</h1>
        <select
          className={
            selectedRole === "" ? styles.colorDefault : styles.colorValue
          }
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          name="especie"
          required
        >
          <option value="" disabled>
            Selecione um cargo
          </option>
          {petOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input type="text" name="name" placeholder="Nome" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <input type="phone" name="phone" placeholder="Telefone" required />
        <input type="password" name="password" placeholder="Senha" required />
        <Link href="/login">Login</Link>
        <button type="submit" className={styles.button}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
