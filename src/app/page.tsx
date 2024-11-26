"use client";
import NFTClaimer  from "@/app/components/NFTClaimer"
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { ContractAddress,client } from "./client";

export default function Home() {
  const account = useActiveAccount();

  const MantleContract = getContract({
    client: client,
    chain: defineChain(5003),
    address: ContractAddress,
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 text-blue-600 cursor-pointer">
          NFT Marketplace
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
        />
        </div>
        <div className="flex flex-row">
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={MantleContract}
          tokenId={0n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={MantleContract}
          tokenId={1n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={MantleContract}
          tokenId={2n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={MantleContract}
          tokenId={3n}
        />
        </div>
      </div>
    </main>
  );
}