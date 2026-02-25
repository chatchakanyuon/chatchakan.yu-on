import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ExpandMore } from "@mui/icons-material";

type JustDisclosureProps = {
  panels: {
    label: string;
    children: string;
  }[];
};

export default function JustDisclosure(props: JustDisclosureProps) {
  const { panels } = props;

  return (
    <div className="h-screen w-full px-4 pt-32">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        {panels.map((panel) => (
          <Disclosure
            key={panel.label}
            as="div"
            className="p-6"
            defaultOpen={true}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                {panel.label}
              </span>
              <ExpandMore className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
              {panel.children}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
