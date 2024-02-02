import { Modal } from './Modal';

export default function ProjModal({
  params: { id: Id },
}: {
  params: { id: string };
}) {
  return <Modal>{Id}</Modal>;
}