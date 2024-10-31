import React, { useEffect, useState } from "react";
import { data } from "./data.ts"
import './index.css'

interface iUserBankAccount {
    name: string;
    balance: number;
    pending_charges: [number];
}

const BankAccount: React.FC = () => {
    const [bankData, setBankData] = useState<iUserBankAccount>()


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:5000", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json() as iUserBankAccount
            setBankData(data)
        };

        fetchData();

    }, [])

    return (
        <div className="account">
            {bankData !== null && bankData !== undefined ? (
                <>
                    <p>Bank Account Holder: {bankData.name}</p>
                    <p>Balance: ${bankData.balance}</p>
                    <div>
                        {bankData.pending_charges.map((charge, index) => (
                            <p key={index}>Charge {index + 1}: ${charge}</p>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default BankAccount