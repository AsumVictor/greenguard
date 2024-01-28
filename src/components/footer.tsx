import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent/50">
      <div className="bg-accent/50 text-center py-4">
        <p>&#169; Copyrights - Team #5</p>
      </div>
    </footer>
  );
}
