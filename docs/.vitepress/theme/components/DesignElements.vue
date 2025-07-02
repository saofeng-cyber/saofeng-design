<template>
  <div class="design-elements">
    <!-- 装饰性卡片 -->
    <div
      class="decorative-card"
      v-if="type === 'card'"
    >
      <div class="card-header">
        <div class="card-icon">
          <slot name="icon">🌿</slot>
        </div>
        <h3 class="card-title">
          <slot name="title">标题</slot>
        </h3>
      </div>
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-decoration"></div>
    </div>

    <!-- 渐变分割线 -->
    <div
      class="gradient-divider"
      v-if="type === 'divider'"
    >
      <div class="divider-line"></div>
      <div class="divider-icon">
        <slot name="icon">✨</slot>
      </div>
      <div class="divider-line"></div>
    </div>

    <!-- 特色标签 -->
    <div
      class="feature-badge"
      v-if="type === 'badge'"
      :class="variant"
    >
      <div class="badge-icon">
        <slot name="icon">⭐</slot>
      </div>
      <span class="badge-text">
        <slot></slot>
      </span>
    </div>

    <!-- 进度指示器 -->
    <div
      class="progress-indicator"
      v-if="type === 'progress'"
    >
      <div class="progress-label">
        <slot name="label">进度</slot>
      </div>
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
      <div class="progress-text">{{ progress }}%</div>
    </div>

    <!-- 时间轴 -->
    <div
      class="timeline-item"
      v-if="type === 'timeline'"
    >
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-title">
          <slot name="title">时间轴标题</slot>
        </div>
        <div class="timeline-description">
          <slot></slot>
        </div>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div
      class="stats-card"
      v-if="type === 'stats'"
    >
      <div class="stats-icon">
        <slot name="icon">📊</slot>
      </div>
      <div class="stats-content">
        <div class="stats-number">{{ number }}</div>
        <div class="stats-label">
          <slot></slot>
        </div>
      </div>
      <div
        class="stats-trend"
        :class="trend"
      >
        <span class="trend-icon">{{ trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→' }}</span>
      </div>
    </div>

    <div
      class="quote-box"
      v-if="type === 'quote'"
    >
      <div class="quote-mark">"</div>
      <div class="quote-content">
        <slot></slot>
      </div>
      <div class="quote-author">
        <slot name="author">— 匿名</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'card',
    validator: value =>
      ['card', 'divider', 'badge', 'progress', 'timeline', 'stats', 'quote'].includes(value),
  },
  variant: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'success', 'warning', 'danger', 'info'].includes(value),
  },
  progress: {
    type: Number,
    default: 0,
  },
  number: {
    type: [String, Number],
    default: '0',
  },
  trend: {
    type: String,
    default: 'stable',
    validator: value => ['up', 'down', 'stable'].includes(value),
  },
});
</script>

<style scoped>
/* 装饰性卡片 */
.decorative-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.decorative-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-icon {
  font-size: 2rem;
  background: var(--vp-c-brand-gradient-light);
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 1.25rem;
}

.card-content {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.card-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(50%, -50%);
}

/* 渐变分割线 */
.gradient-divider {
  display: flex;
  align-items: center;
  margin: 3rem 0;
  gap: 1rem;
}

.divider-line {
  flex: 1;
  height: 2px;
  background: var(--vp-c-brand-gradient);
  border-radius: 1px;
}

.divider-icon {
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  padding: 0.5rem;
  border-radius: 50%;
  border: 2px solid var(--vp-c-brand-1);
}

/* 特色标签 */
.feature-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  margin: 0.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.feature-badge.primary {
  background: var(--vp-c-brand-gradient);
  color: white;
}

.feature-badge.success {
  background: var(--vp-c-success-1);
  color: white;
}

.feature-badge.warning {
  background: var(--vp-c-warning-1);
  color: white;
}

.feature-badge.danger {
  background: var(--vp-c-danger-1);
  color: white;
}

.feature-badge.info {
  background: var(--vp-c-info-1);
  color: white;
}

/* 进度指示器 */
.progress-indicator {
  margin: 1.5rem 0;
}

.progress-label {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-bar {
  height: 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: var(--vp-c-brand-gradient);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: right;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* 时间轴 */
.timeline-item {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  position: relative;
}

.timeline-marker {
  position: relative;
  flex-shrink: 0;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

.timeline-marker::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 50px;
  background: var(--vp-c-border);
}

.timeline-content {
  flex: 1;
  padding-bottom: 2rem;
}

.timeline-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 统计卡片 */
.stats-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
}

.stats-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.stats-icon {
  font-size: 2rem;
  background: var(--vp-c-brand-gradient-light);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-content {
  flex: 1;
}

.stats-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.stats-label {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.stats-trend {
  font-size: 1.5rem;
  font-weight: 600;
}

.stats-trend.up {
  color: var(--vp-c-success-1);
}

.stats-trend.down {
  color: var(--vp-c-danger-1);
}

.stats-trend.stable {
  color: var(--vp-c-text-3);
}

/* 引用框 */
.quote-box {
  background: var(--vp-c-brand-gradient-light);
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 0 12px 12px 0;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  font-style: italic;
}

.quote-mark {
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 4rem;
  color: var(--vp-c-brand-1);
  opacity: 0.3;
  font-family: serif;
  line-height: 1;
}

.quote-content {
  color: var(--vp-c-text-1);
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.quote-author {
  color: var(--vp-c-text-2);
  font-weight: 600;
  text-align: right;
}
</style>
