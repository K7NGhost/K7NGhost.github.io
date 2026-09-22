<script lang="ts">
  import { onMount } from 'svelte';

  const title = 'K7NGhost';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>_+/';
  const duration = 1100;

  let displayed = $state(title);
  let scrambleElement: HTMLSpanElement;

  onMount(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let start: number | undefined;
    let lastUpdate = -Infinity;

    function animate(now: number) {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);

      // Limit character changes to about 20 times per second.
      if (now - lastUpdate >= 50 || progress === 1) {
        const revealed = Math.floor(progress * title.length);

        displayed = [...title]
          .map((letter, index) =>
            index < revealed || /\s/.test(letter)
              ? letter
              : characters[Math.floor(Math.random() * characters.length)]
          )
          .join('');

        lastUpdate = now;
      }

      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    function handleMotionChange() {
      if (motion.matches) {
        cancelAnimationFrame(frame);
        displayed = title;
      }
    }

    function restart() {
      cancelAnimationFrame(frame);
      start = undefined;
      lastUpdate = -Infinity;

      if (motion.matches) {
        displayed = title;
        return;
      }

      animate(performance.now());
    }

    restart();
    scrambleElement.addEventListener('pointerenter', restart);
    motion.addEventListener('change', handleMotionChange);

    return () => {
      cancelAnimationFrame(frame);
      scrambleElement.removeEventListener('pointerenter', restart);
      motion.removeEventListener('change', handleMotionChange);
    };
  });
</script>

<section class="hero">
  <p>Developer & creator</p>

  <h1>
    <span class="sr-only">{title}</span>
    <span bind:this={scrambleElement} class="scramble" aria-hidden="true">{displayed}</span>
  </h1>
</section>

<style>
  .hero {
    min-block-size: 70svh;
    display: grid;
    align-content: center;
    justify-items: start;
    gap: 1rem;
    padding: clamp(1.5rem, 6vw, 6rem);
  }

  p {
    margin: 0;
    color: #101011;
  }

  h1 {
    margin: 0;
    font-size: clamp(2rem, 8vw, 7rem);
    line-height: 1.1;
  }

  .scramble {
    display: inline-block;
    font-family: ui-monospace, monospace;
    white-space: pre;
    color: #101111;
  }

  .sr-only {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
</style>
