import { useParams } from "react-router-dom";
import { detailInquire } from "@/services/main";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/assets/Loader";
import ModalTemplate from "./ModalTemplate";

/**
 *
 * @param {object} props
 * @param {string} props.what
 * @param {object} props.click
 */
interface ModalLayoutProps {
  what?: string;
  click?: () => void;
  id?: string;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ what, click }) => {
  const { id } = useParams<{ id: string }>();
  const datas = useQuery({
    queryKey: ["voteId", id],
    queryFn: () => {
      return detailInquire(id as string);
    },
    enabled: !!id,
  });
  const detailData = datas?.data?.data.data.vote;

  return (
    <>
      {datas.error ? (
        <>{datas.error}</>
      ) : (
        <>
          {datas.isLoading ? (
            <Loader />
          ) : (
            detailData && (
              <ModalTemplate
                detailData={detailData}
                click={click!}
                what={what as string}
              ></ModalTemplate>
            )
          )}
        </>
      )}
    </>
  );
};

export default ModalLayout;
