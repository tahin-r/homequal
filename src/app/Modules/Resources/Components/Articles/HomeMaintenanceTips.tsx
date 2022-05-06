import React, { FC, ReactElement }           from 'react'
import { Iarticle }                          from '../../ResourcesData';
import { Typography }                        from '@mui/material';
import { CreateDefinition, SimpleTypography, TitleTypography } from './sharedStyles';
import { Container }                         from '@material-ui/core';


export const HomeMaintenanceTips: FC<Iarticle> = () => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          Home Maintenance Tips
        </Typography>

        <SimpleTypography fontStyle='italic'>
          Congrats on buying your first home. However, with all of this excitement, it’s easy to overlook routine home
          maintenance, especially when you’ve never had to tackle these tasks before.
          To keep things from getting overwhelming, it’s a good idea to tackle home maintenance routinely. Dive into
          these 8 home maintenance tips you’ll need to handle in the first year of buying a home.
        </SimpleTypography>
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Replace the Filters
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'Who knows what dust and grime the previous owners have left behind? Clogged filters make heating and cooling systems run less efficiently, which wastes energy and costs you money. They can also trap harmful pollutants and allergens that you don’t want lurking around your home.'
        ) }
        { CreateDefinition(
          ' How:',
          'Just turn off your system, pull out your filters and inspect them for dirt and grime. If they’re dark and dirty-looking, get suitable replacements. Just remove the old filter, slide the new one in and turn everything back on.'
        ) }

        { CreateDefinition(
          'When:',
          'Right after you move in and every year at the same time.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Seal Your Windows
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'First, it looks better. Second, 80 percent of winter heat loss occurs due to cracks in a home and the main culprit is your windows. Sealing the spaces around windows with caulk goes a long way toward solving this problem.'
        ) }
        { CreateDefinition(
          'How:',
          'When applying the caulk, make sure all surfaces are clean and dry, and pay attention to the temperature specifications in the product information. Since temperatures change most in the morning, it’s smart to start your project after they have leveled out.'
        ) }
        { CreateDefinition(
          'When:',
          'As needed. Inspect the caulking around your windows at the end of every summer so you can touch up any damaged caulking while the weather is still dry.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Check for Water Leaks
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'To avoid mold and water damage to the bones of your house.') }
        { CreateDefinition(
          'How:',
          'It’s as simple as grabbing a flashlight, head to the attic and take a close, careful look. Pay attention to corners, edges and changes in color on your wood beams or in your insulation, and use your fingers to test for dampness if you aren’t sure. If you find any water, see where it’s coming from. If you can’t figure it out, call a home inspector.') }
        { CreateDefinition(
          'When:',
          'Every fall before it rains. The key is to fix existing water damage before any more water gets in.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Check any wood surfaces outside your hom
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'Wood decks and other wood surfaces need to be sealed and stained to prevent water damage and rot') }
        { CreateDefinition(
          'How:',
          'A quick splash test will tell you if the last seal is still working. If you fill a glass of water and spill it on your deck, you should see tiny beads of moisture form on the surface — a sign that the sealant is still repelling the water. If that doesn’t happen, then it’s time to reseal your deck.'
        ) }
        { CreateDefinition(
          'When:',
          'You should do a splash test at the beginning of every summer and expect to reseal your deck every two or three years.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Touch Up Exterior Paint
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'Besides contributing to curb appeal, paint and stain serve as important protectants, preventing wood rot, rusting your gutters, etc.') }
        { CreateDefinition(
          'How:',
          'Walk around your home and look for chipping, peeling, blistering, or cracking on every part of your home, including the trim.') }
        { CreateDefinition(
          'When:',
          'Every summer.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Clean the Furnace
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'When your furnace isn’t running properly, it will suck energy and can even emit harmful carbon monoxide.') }
        { CreateDefinition(
          'How:',
          'Call a pro. Just be sure to use a licensed heating, ventilation and air conditioning specialist.') }
        { CreateDefinition(
          'When:',
          'Having your furnace inspected every fall will prolong the life of your appliance.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Have Wood-Burning Fireplaces Inspected and Cleaned
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'A flammable byproduct of wood burning can build up in fireplaces and chimneys. This creates a fire hazard and elevates the risk of carbon monoxide poisoning.') }
        { CreateDefinition(
          'How:',
          'This is not a DIY project. Call a trained chimney sweep. They’ll use specialized equipment.') }
        { CreateDefinition(
          'When:',
          'Every fall before fire-burning season.'
        ) }
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Clean Your Gutters
        </TitleTypography>
        { CreateDefinition(
          'Why:',
          'Clogged gutters cause water to back up and potentially enter your home via the foundation, roof, or crawl space, or even freeze inside your gutters and wreck them altogether.') }
        { CreateDefinition(
          'How:',
          'Grab a sturdy ladder and take a peek. Use gloved hands to remove debris from gutters before flushing them with a garden hose to make sure there aren’t any hidden clogs.') }
        { CreateDefinition(
          'When:',
          'Every fall or even twice annually if you live in a wooded area.'
        ) }

        <SimpleTypography>
          As you live in the home, you will find additional items that need to be addressed, such as sprinkler systems,
          landscaping beds etc. Everything does not have to be done at once. Just do a little throughout the year to
          keep your home in tip top shape.
        </SimpleTypography>

      </Container>
    </>
  )
}

