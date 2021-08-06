import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FlipACoinService } from 'src/app/services/flip-a-coin.service';

import {
  click,
  expectText,
  findEl,
} from '../../spec-helpers/element.spec-helper';
import { FlipACoinComponent } from './flip-a-coin.component';

describe('FlipACoinComponent', () => {
  let fixture: ComponentFixture<FlipACoinComponent>;
  let service: jasmine.SpyObj<FlipACoinService>;

  beforeEach(async () => {
    service = {
      flipACoin: jasmine.createSpy('flipACoin'),
    };
    // This is equivalent to:
    // service = jasmine.createSpyObj<FlipACoinService>('FlipACoinService', ['flipACoin'])

    await TestBed.configureTestingModule({
      declarations: [FlipACoinComponent],
      providers: [{ provide: FlipACoinService, useValue: service }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipACoinComponent);
    fixture.detectChanges();
  });

  it('shows the initial state', () => {
    expect(() => {
      findEl(fixture, 'output');
    }).toThrow()
    expect(service.flipACoin).not.toHaveBeenCalled();
  });

  it('outputs heads', () => {
    service.flipACoin.and.returnValue(true);

    click(fixture, 'flip-coin-button');
    fixture.detectChanges();

    expectText(fixture, 'output', 'heads');
    expect(service.flipACoin).toHaveBeenCalled();
  });

  it('outputs tails', () => {
    service.flipACoin.and.returnValue(false);

    click(fixture, 'flip-coin-button');
    fixture.detectChanges();

    expectText(fixture, 'output', 'tails');
    expect(service.flipACoin).toHaveBeenCalled();
  });
});
