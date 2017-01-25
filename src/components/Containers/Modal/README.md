**Basic**

    import {Modal, Button} from '@parmenion/library'

    <Button onClick={() => setState({ isModalOpen: true })}>Open modal</Button>

    <Modal title="Modal title" isOpen={state.isModalOpen} onClose={() => setState({ isModalOpen: false })}>
      Modal contents
    </Modal>

**With primary CTA**

    import {Modal, Button} from '@parmenion/library'

    <Button onClick={() => setState({ isModalOpen: true })}>Open modal</Button>

    <Modal
      title="Modal title"
      isOpen={state.isModalOpen}
      onClose={() => setState({ isModalOpen: false })}
      primaryButton={
        <Button type={1} onClick={() => setState({ isModalOpen: false })}>Save changes</Button>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus purus euismod ligula iaculis. Fusce dapibus mi ipsum, a mattis eros fermentum quis. Suspendisse convallis mi libero, a luctus diam commodo a. Curabitur tincidunt nibh vitae ipsum laoreet molestie. Mauris in nulla sed dolor pretium hendrerit. Maecenas consectetur ultrices justo non tincidunt. Ut sit amet ullamcorper velit, suscipit interdum est. Curabitur vitae ligula est. Vivamus aliquet faucibus diam, a faucibus velit tincidunt et. Praesent egestas mollis molestie. Nulla ut vehicula lectus, scelerisque posuere magna. Mauris non augue nisi. Fusce molestie viverra velit sit amet faucibus. Nulla fringilla sapien vel dolor sollicitudin, sed mollis lacus tincidunt. Phasellus eget justo est. Quisque consequat mi non ornare malesuada.
    </Modal>

**With other buttons**

    import {Modal, Button} from '@parmenion/library'

    <Button onClick={() => setState({ isModalOpen: true })}>Open modal</Button>

    <Modal
      title="Modal title"
      isOpen={state.isModalOpen}
      onClose={() => setState({ isModalOpen: false })}
      buttons={[
        <Button>Button 1</Button>,
        <Button>Button 2</Button>,
        <Button onClick={() => setState({ isModalOpen: false })}>Close modal</Button>,
      ]}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus purus euismod ligula iaculis. Fusce dapibus mi ipsum, a mattis eros fermentum quis. Suspendisse convallis mi libero, a luctus diam commodo a. Curabitur tincidunt nibh vitae ipsum laoreet molestie. Mauris in nulla sed dolor pretium hendrerit. Maecenas consectetur ultrices justo non tincidunt. Ut sit amet ullamcorper velit, suscipit interdum est. Curabitur vitae ligula est. Vivamus aliquet faucibus diam, a faucibus velit tincidunt et. Praesent egestas mollis molestie. Nulla ut vehicula lectus, scelerisque posuere magna. Mauris non augue nisi. Fusce molestie viverra velit sit amet faucibus. Nulla fringilla sapien vel dolor sollicitudin, sed mollis lacus tincidunt. Phasellus eget justo est. Quisque consequat mi non ornare malesuada.
    </Modal>

**With primary CTA other buttons**

    import {Modal, Button} from '@parmenion/library'

    <Button onClick={() => setState({ isModalOpen: true })}>Open modal</Button>

    <Modal
      title="Modal title"
      isOpen={state.isModalOpen}
      onClose={() => setState({ isModalOpen: false })}
      buttons={[
        <Button>Button 1</Button>,
        <Button>Button 2</Button>,
      ]}
      primaryButton={
        <Button type={1} onClick={() => setState({ isModalOpen: false })}>Save changes</Button>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus purus euismod ligula iaculis. Fusce dapibus mi ipsum, a mattis eros fermentum quis. Suspendisse convallis mi libero, a luctus diam commodo a. Curabitur tincidunt nibh vitae ipsum laoreet molestie. Mauris in nulla sed dolor pretium hendrerit. Maecenas consectetur ultrices justo non tincidunt. Ut sit amet ullamcorper velit, suscipit interdum est. Curabitur vitae ligula est. Vivamus aliquet faucibus diam, a faucibus velit tincidunt et. Praesent egestas mollis molestie. Nulla ut vehicula lectus, scelerisque posuere magna. Mauris non augue nisi. Fusce molestie viverra velit sit amet faucibus. Nulla fringilla sapien vel dolor sollicitudin, sed mollis lacus tincidunt. Phasellus eget justo est. Quisque consequat mi non ornare malesuada.
    </Modal>
