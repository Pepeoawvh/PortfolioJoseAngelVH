import React from "react";
import Link from "next/link";

const MaterialEducativo = () => {
  return (
    <div className="p-4 select-none">
      <Link href="/educacion" className="text-[#FFB300] hover:text-yellow-400">
        Ir a Material Educativo
      </Link>
    </div>
  );
};

export default MaterialEducativo;