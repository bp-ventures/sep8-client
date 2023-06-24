"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [xdr, Set_xdr] = useState<string | undefined>(undefined);
  const [error, Set_error] = useState<any | undefined>(undefined);
  const [response, Set_response] = useState<any | undefined>(undefined);

  const approvalServerUrl = process.env.NEXT_PUBLIC_APPROVAL_SERVER_URL
    ? process.env.NEXT_PUBLIC_APPROVAL_SERVER_URL
    : "https://as-uat.bpventures.us";

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          padding: 10,
          color: "black",
          textAlign: "center",
        }}
      >
        <h3>SEP-8 Client Tester</h3>
        <p>Approval server URL: {approvalServerUrl}</p>
        <textarea
          style={{ fontSize: "1.2em", width: "100%" }}
          placeholder="Enter XDR here"
          rows={10}
          onChange={(e: any) => Set_xdr(e.target.value)}
        ></textarea>
        <button
          style={{ padding: 5, height: "30px" }}
          onClick={() => {
            Set_error(undefined);
            Set_response(undefined);
            axios
              .post(`${approvalServerUrl}/tx-approve`, {
                tx: xdr,
              })
              .then((response) => {
                Set_response(response.data);
              })
              .catch((err) => {
                console.error(err);
                if (err.response) {
                  Set_error(err.response);
                } else {
                  Set_error(err);
                }
              });
          }}
        >
          Submit to approval server
        </button>
        {error !== undefined && (
          <pre
            style={{
              color: "red",
              wordWrap: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {JSON.stringify(error)}
          </pre>
        )}
        {response !== undefined && (
          <pre
            style={{
              color: "green",
              wordWrap: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {JSON.stringify(response)}
          </pre>
        )}
      </div>
    </main>
  );
}
