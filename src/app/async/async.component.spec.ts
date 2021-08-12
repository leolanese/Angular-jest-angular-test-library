import { fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import '@testing-library/jest-dom/extend-expect'

import { AsyncComponent } from './async.component';

it('should test some asynchronous code', fakeAsync(() => {}));

it('Verify if can use fakeTimer utilities', async () => {
  jest.useFakeTimers();
  await render(AsyncComponent);

  const load = await screen.findByRole('button', { name: /load/i });
  fireEvent.click(load);

  jest.advanceTimersByTime(10_000);

  const hello = await screen.findByText('Hello world');
  expect(hello).toBeInTheDocument();
});