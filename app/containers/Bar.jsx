import React from 'react';
import { Accordion, AccordionPanel } from '../library/components/Containers/Accordion';
import Label from '../library/components/Decoration/Label';
import LabelBool from '../library/components/Decoration/LabelBool';
import Button from '../library/components/Form/ButtonBool';

const NewButton = {
  padding: '20px',
  borderWidth: '4px',
};

export default props => (
  <Accordion>

    <AccordionPanel title="Accordion Panel Title Here">
      <p>
        <Label>This is a label</Label>
        <Label type={1}>This is a label</Label>
        <Label type={2}>This is a label</Label>
        <Label type={3}>This is a label</Label>
        <Label type={4}>This is a label</Label>
      </p>
      <p>
        <LabelBool>This is a label</LabelBool>
        <LabelBool success>This is a label</LabelBool>
        <LabelBool danger>This is a label</LabelBool>
        <LabelBool warning>This is a label</LabelBool>
        <LabelBool info>This is a label</LabelBool>
      </p>
      <p>
          Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
        </p>
    </AccordionPanel>

    <AccordionPanel title="Accordion Panel Title Here 2">
      <p>
        <Button href="#">
            This is a button
          </Button>
        <Button primary href="#">
            This is a button
          </Button>
        <Button secondary href="#">
            This is a button
          </Button>
        <Button danger href="#">
            This is a button
          </Button>
        <Button link href="#">
            This is a button
          </Button>
        <Button style={NewButton}>
            This is an overridden button
          </Button>
      </p>
      <p>
          Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
        </p>
    </AccordionPanel>

    <AccordionPanel title="Accordion Panel Title Here 3">
      <p>
          Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
        </p>
      <p>
          Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
        </p>
      <p>
          Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
        </p>
    </AccordionPanel>

    <AccordionPanel title="Accordion Panel Title Here 4">
      <p>
          Curabitur vitae mauris fringilla, sodales lacus placerat, volutpat enim. Fusce tristique nisi non metus lacinia commodo. Nullam ornare orci elit, non eleifend justo rutrum in. Curabitur consectetur gravida aliquet. Quisque et orci metus. Ut lacinia turpis ac arcu elementum, nec fringilla urna dictum. Phasellus porta elementum eros, in condimentum eros commodo a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices justo ac lacus molestie, quis volutpat nulla pellentesque. Fusce vel pharetra odio. Nullam id ultrices elit, ac sodales risus. Nunc gravida aliquet ornare. Aliquam tristique, turpis at varius sagittis, elit magna posuere metus, ac tincidunt velit metus nec felis. Nullam eget nunc est. Sed fringilla, velit quis maximus feugiat, massa nulla tempus dui, eget cursus orci nisi quis neque. Donec venenatis erat lorem, non ultricies dui vehicula sit amet.
        </p>
    </AccordionPanel>

  </Accordion>
);
