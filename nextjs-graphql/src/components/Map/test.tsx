import Map from '.';
import { render, screen } from '@testing-library/react';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'petropolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };
    const place2 = {
      id: '2',
      name: 'Olinda',
      slug: 'Olinda',
      location: {
        latitude: 55,
        longitude: -97,
      },
    };
    render(<Map places={[place, place2]} />);

    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/olinda/i)).toBeInTheDocument();
  });
});
