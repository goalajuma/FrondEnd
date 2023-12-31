import PropTypes from "prop-types";
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

const ModalLayout = ({ what, click }) => {
  const { id } = useParams();
  const datas = useQuery({
    queryKey: ["voteId", id],
    queryFn: () => {
      return detailInquire(id);
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
                click={click}
                what={what}
              ></ModalTemplate>
            )
          )}
        </>
      )}
    </>
  );
};

ModalLayout.propTypes = {
  what: PropTypes.string,
  click: PropTypes.func,
};

export default ModalLayout;
