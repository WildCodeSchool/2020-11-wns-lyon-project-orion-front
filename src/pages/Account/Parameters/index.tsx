import React from 'react';

const Parameters = () => {
    return <div className="container mx-auto px-8 max-w-2xl grid gap-10 pt-32 pb-12">

        <div className="grid gap-2">
            <h6>Informations</h6>
            <div className="card p-8">
                <p>Informations</p>
            </div>
        </div>

        <div className="grid gap-2">
            <h6>Notifications</h6>
            <div className="card p-8 grid gap-4">
                <label className="flex items-center justify-between cursor-pointer">
                    <p>Réponse à une discussion</p><input type='checkbox' className="switch"/>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                    <p>Etoile reçue</p><input type='checkbox' className="switch"/>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                    <p>Nouveau quiz</p><input type='checkbox' className="switch"/>
                </label>
            </div>
        </div>

        <div className="grid gap-2">
            <h6>Blacklist</h6>
            <div className="card p-8">
                <div className="flex items-center">
                    <span className="material-icons text-red-500 mr-6 text-3xl">folder_shared</span>
                    <p className="opacity-50">Vous n'avez bloqué aucun utilisateur pour le moment.</p>
                </div>
            </div>
        </div>
    </div>
}

export default Parameters;
