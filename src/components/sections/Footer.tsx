"use client";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="flex gap-6 flex-wrap items-start justify-center py-4 flex-col md:flex-row md:justify-center"
    >
      <div className="flex">
        <EmailIcon className="self-center mx-4" />
        <div>
          <h3 className="font-bold">Email</h3>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-zinc-50 text-zinc-400"
            href="mailto:chatchakanyuon@gmail.com"
          >
            chatchakanyuon@gmail.com
          </Link>
        </div>
      </div>

      <div className="flex">
        <LinkedInIcon className="self-center mx-4" />
        <div>
          <h3 className="font-bold">LinkedIn</h3>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-zinc-50 text-zinc-400"
            href="https://www.linkedin.com/in/chatchakan-yu-on-9b5577166/"
            target="_blank"
          >
            Chatchakan Yu-on
          </Link>
        </div>
      </div>

      <div className="flex">
        <CallIcon className="self-center mx-4" />
        <div>
          <h3 className="font-bold">Call</h3>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-zinc-50 text-zinc-400"
            href="tel:+66933614455"
            target="_blank"
          >
            +66-93-361-4455
          </Link>
        </div>
      </div>
    </footer>
  );
}
