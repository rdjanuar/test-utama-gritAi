import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  useEditableControls,
} from "@chakra-ui/react";
import { ButtonBack } from "~/components";

const data = [
  {
    id: 0,
    description: "Lagi ngoding",
  },
];

const Pertama = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="button-check"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="button-close"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size="sm"
          aria-label="button-edit"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }
  return (
    <>
      <ButtonBack />
      {data.map((el) => (
        <Editable
          key={el.id}
          mt={10}
          textAlign="center"
          defaultValue={el.description}
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <EditablePreview />
          {/* Here is the custom input */}
          <Input as={EditableInput} />
          <EditableControls />
        </Editable>
      ))}
    </>
  );
};

export default Pertama;
