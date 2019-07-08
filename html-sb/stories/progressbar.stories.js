import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import centered from '@storybook/addon-centered/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import notes from './color-card.doc.md';
import css from './progress-bar.css';

storiesOf('progress-bar', module)
  .addDecorator(withKnobs)
  // .addDecorator(centered)
  .addDecorator(withNotes)
  .addParameters({
    notes, 
  })
  .add('simple', () => {
    const percentage = text('percentage', '50');

    return `
      <style>${css}</style>
      
      <div class="progress-bar">
        
          <div class="line" style="width:${percentage}%">
            <div class="progress-title">${percentage}%</div>
          </div>
        
      </div>
    `;
  })

  .add('double', () => {
    const percentage = text('percentage', '60');
    const percentage2 = text('percentage2', '30');

    return `
      <style>${css}</style>
      
      <div class="progress-bar">

          <div class="line" style="width:${percentage}%">
            <div class="progress-title">${percentage}%</div>
          </div>

          <div class="line line-secondary" style="width:${percentage2}%">
            <div class="progress-title">${percentage2}%</div>
          </div>
        
      </div>
    `;
  });
