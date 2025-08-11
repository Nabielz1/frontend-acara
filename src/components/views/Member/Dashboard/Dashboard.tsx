import { useState } from "react";

const Dashboard = () => {
    const [username] = useState("Rifqi Nabil"); // contoh data user

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <header className="bg-white shadow p-4 rounded-lg mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Selamat Datang, {username} 👋
                </h1>
                <p className="text-gray-600">Ini adalah dashboard member kamu.</p>
            </header>

            {/* Konten utama */}
            <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kartu Informasi */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">Profil Kamu</h2>
                    <ul className="text-gray-600 text-sm">
                        <li>Role: Member</li>
                        <li>Email: rifqi@example.com</li>
                        <li>Status: Aktif ✅</li>
                    </ul>
                </div>

                {/* Menu Fitur */}
                <div className="bg-white p-4 rounded-lg shadow col-span-2">
                    <h2 className="text-lg font-semibold mb-2">Menu Utama</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow">
                            📅 Jadwal Kegiatan
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg shadow">
                            📄 Data & Dokumen
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg shadow">
                            📢 Pengumuman
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg shadow">
                            📬 Pesan
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
